import { renderNumberCart } from "./main.js";

const handleOpenCart = () => {
  const carts = JSON.parse(localStorage.getItem("carts"));
  renderGioHang(carts);
  renderSummary(carts);
};

const renderGioHang = (carts) => {
  let innerHTML = "";
  if (carts.length) {
    carts.map((cart, index) => {
      return (innerHTML += `
        <div class="row m-0 align-items-center justify-content-center ${
          index === carts.length - 1 ? "" : "mb-3"
        }">
            <div class=" col-3 item-img">
                <img
            src="${cart.img}"
            alt="${cart.name}">
            </div>
            <div class="col-4 item-infor">
                <p class="mb-0">${cart.type}</p>
                <h6 class="font-weight-bold">${cart.name}</h6>
            </div>
            <div class="col-2 item-adjust">
                <span class="minus" onclick="handleAdjustQuantity('${
                  cart.name
                }', 0)">
                    <i class="fa fa-minus"></i>
                </span>
                <span class="number">${cart.quantity}</span>
                <span class="plus"  onclick="handleAdjustQuantity('${
                  cart.name
                }', 1)">
                 <i class="fa fa-plus"></i>
                </span>
            </div>
            <div class="col-2 item-price">
                <span>$${(cart.price * cart.quantity).toLocaleString()}</span>
            </div>
            <div class="col-1 item-delete" onclick="removeFromCart(${index})">
                <i class="fa fa-times"></i>
            </div>
        </div>
        `);
    });
  } else {
    innerHTML = `
    <div class="text-center">
      <img style="width: 500px; margin: auto" src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" alt="no data">
    </div>`;
  }

  document.querySelector(".cart-show-item").innerHTML = innerHTML;
};

const renderSummary = (carts) => {
  let number = 0;
  let totalPriceItemOnly = 0;
  carts.forEach((item) => {
    number += item.quantity;
    totalPriceItemOnly += item.quantity * item.price;
  });
  document.querySelector(".summury__item-number").innerText = number;
  document.querySelector(
    ".summury__item-price-only"
  ).innerText = `$${totalPriceItemOnly.toLocaleString()}`;
  document.querySelector(".total").innerText = `$${(totalPriceItemOnly
    ? totalPriceItemOnly + 5
    : 0
  ).toLocaleString()}`;
};

const handleAdjustQuantity = (name, action) => {
  const carts = JSON.parse(localStorage.getItem("carts"));
  const item = carts.find((product) => product.name === name);
  const index = carts.findIndex((product) => product.name === name);
  const { quantity } = item;
  if (action) {
    carts[index].quantity += 1;
    localStorage.setItem("carts", JSON.stringify(carts));
    handleOpenCart();
    renderNumberCart();
  } else {
    if (quantity === 1) {
      removeFromCart(index);
      renderNumberCart();
    } else {
      carts[index].quantity -= 1;
      localStorage.setItem("carts", JSON.stringify(carts));
      handleOpenCart();
      renderNumberCart();
    }
  }
};

const removeFromCart = (index) => {
  const carts = JSON.parse(localStorage.getItem("carts"));
  carts.splice(index, 1);
  localStorage.setItem("carts", JSON.stringify(carts));
  handleOpenCart();
  renderNumberCart();
};

window.handleOpenCart = handleOpenCart;
window.renderGioHang = renderGioHang;
window.renderSummary = renderSummary;
window.handleAdjustQuantity = handleAdjustQuantity;
window.removeFromCart = removeFromCart;
