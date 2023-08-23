import { renderAllProducts } from "./main.js";

const handleFilter = (event) => {
  const fillter = event.target.value;

  const products = JSON.parse(localStorage.getItem("products"));
  if (fillter === "All") {
    renderAllProducts(products);
  } else {
    const fillterProducts = products.filter(
      (product) => product.type === fillter
    );
    renderAllProducts(fillterProducts);
  }
};

window.handleFilter = handleFilter;
