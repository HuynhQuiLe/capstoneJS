import { getAllProducts } from "../controllers/productControllers.js";

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
                <button>Thêm vào giỏ hàng</button>
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

window.getAllProducts = getAllProducts;

getAllProducts();
