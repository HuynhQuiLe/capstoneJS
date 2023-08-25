import { getAllProducts, addCart } from "../controllers/productControllers.js";

export const renderAllProducts = (products) => {
  let innerHTML = "";
  products.map((product) => {
    return (innerHTML += `
        <div class="item">
        <div
          class="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
        >
          <div class="overlay">
            <span class="wrap-icon icon-link2"
            data-toggle="modal" data-target="#modalDetail" onclick="handleWatchDetail(${product.id})"
              ><i class="fa fa-link"></i
            ></span>
            <div class="portfolio-item-content">
              <h3>${product.name}</h3>
              <div>
                <p>$${product.price}</p>
                <button onclick="addCart(${product.id})">Thêm vào giỏ hàng</button>
              </div>
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

export const renderdetail = (product) => {
  let innerHTML = `
  <div class="row m-0">
                <div class="col-6">
                  <img src="${product.img}" alt="photo-detail">
                </div>
                <div class="col-6 detail-info">
                  <h3>${product.name}</h3>
                  <p class="price">$${product.price}</p>
                  <p><b>Nhà sản xuất: </b>${product.type}</p>
                  <p><b>Thông số kỹ thuật: </b></p>
                  <ol>
                    <li><b>Màn hình: </b>${product.screen}</li>
                    <li><b>Camera trước: </b>${product.frontCamera}</li>
                    <li><b>Camera sau: </b>${product.backCamera}</li>
                    <li><b>Mô tả: </b>${product.desc}</li>
                  </ol>
                </div>
                
              </div>

  `;

  document.querySelector(".modal-body-detail").innerHTML = innerHTML;
};

window.getAllProducts = getAllProducts;
window.addCart = addCart;
window.renderdetail = renderdetail;
getAllProducts();

renderNumberCart();

// effect

setTimeout(() => {
  document.querySelector("#search").style.opacity = 1;
}, 2500);
