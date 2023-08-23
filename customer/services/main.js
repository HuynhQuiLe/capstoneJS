import { getAllProducts, addCart } from "../controllers/productControllers.js";

export const renderAllProducts = (products) => {
  let innerHTML = "";
  products.map((product) => {
    return (innerHTML += `
        <div class="item">
        <div
          class="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
          data-id="1"
        >
          <div class="overlay">
            <span class="wrap-icon icon-link2"
              ><i class="fa fa-link"></i
            ></span>
            <div class="portfolio-item-content">
              <h3>${product.name}</h3>
              <div>
                <p>$${product.price}</p>
                <button onclick="addCart(${product.id})">Thêm vào giỏ hàng</button>
              </div>'
            </div>
          </div>
          <img
            src="${product.img}"
            class="lazyload img-fluid"
            alt="Images"
          />
        </div>
      </div>
        `);
  });

  document.querySelector("#product").innerHTML = innerHTML;
};

export const renderNumberCart = () => {
  // get carts
  const carts = JSON.parse(localStorage.getItem("carts"));
  let number = 0;

  if (!carts) {
    number = 0;
  } else {
    carts.forEach((cart) => {
      number += cart.quantity;
    });
  }

  document.querySelector(".cart-number").innerText = number;
};

window.getAllProducts = getAllProducts;
window.addCart = addCart;
getAllProducts();

renderNumberCart();

// effect

setTimeout(() => {
  document.querySelector("#search").style.opacity = 1;
}, 2500);
