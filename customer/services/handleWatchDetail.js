import { renderdetail } from "./main.js";

const handleWatchDetail = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const productDetail = products.find((product) => product.id == id);
  renderdetail(productDetail);
  document
    .querySelector(".addData-cta")
    .setAttribute("onclick", `addCart(${id})`);
};

window.handleWatchDetail = handleWatchDetail;
