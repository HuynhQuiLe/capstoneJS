const BASE_URL = "https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS";
import { renderAllProducts, renderNumberCart } from "../services/main.js";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(BASE_URL);

    // Luu data vao localStorage
    localStorage.setItem("products", JSON.stringify(data));
    setTimeout(() => {
      renderAllProducts(data);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};

// const getProductByID = async (id) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${id}`);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addCart = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  let addedProduct = products.find((product) => product.id == id);
  addedProduct = { ...addedProduct, quantity: 1 };
  console.log(addedProduct);
  const carts = JSON.parse(localStorage.getItem("carts")) || [];

  const index = carts.findIndex((cart) => cart.name === addedProduct.name);
  console.log(index);
  if (index === -1) {
    carts.push(addedProduct);
    localStorage.setItem("carts", JSON.stringify(carts));
    showAddSuccess();
  } else {
    carts[index].quantity += 1;
    localStorage.setItem("carts", JSON.stringify(carts));
    showAddSuccess();
  }
  renderNumberCart();
};

function showAddSuccess() {
  Toastify({
    text: "Thêm giỏ hàng thành công.",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
