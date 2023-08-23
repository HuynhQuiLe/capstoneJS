import { handleOpenCart } from "./handleOpenCart.js";
import { renderNumberCart } from "./main.js";
const handleBuy = () => {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  if (!carts.length) {
    showAlertEmpty();
  } else {
    carts = [];
    localStorage.setItem("carts", JSON.stringify(carts));
    showBuySuccess();
    handleOpenCart();
    renderNumberCart();
    $(".modal").modal("hide");
  }
};

function showAlertEmpty() {
  Toastify({
    text: "Giỏ hàng của bạn trống.",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        "linear-gradient(34deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function showBuySuccess() {
  Toastify({
    text: "Mua hàng thành công.",
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

window.handleBuy = handleBuy;
window.showAlertEmpty = showAlertEmpty;
window.showBuySuccess = showBuySuccess;
