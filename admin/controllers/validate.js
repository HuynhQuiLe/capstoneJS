export function validateForm() {
    var isValid = true;

    var backCameraInput = document.getElementById("backCamera");

    var backCameraErrorSpan = document.getElementById("spanBackCamera");

    if (!backCameraInput.value.trim()) {

      backCameraErrorSpan.innerText = "Vui lòng nhập BackCamera";

      isValid = false;

      backCameraInput.classList.add("input-error");

    } 
    else {
      backCameraErrorSpan.innerText = "";

      backCameraInput.classList.remove("input-error");
    }
    
    var descInput = document.getElementById("desc");

    var descErrorSpan = document.getElementById("spanDesc");

    if (!descInput.value.trim()) {

      descErrorSpan.innerText = "Vui lòng nhập desc";

      isValid = false;

      descInput.classList.add("input-error");

    } 
    else {
      descErrorSpan.innerText = "";

      descInput.classList.remove("input-error");
    }
  
    var FrontCameraInput = document.getElementById("frontCamera");

    var frontCameraErrorSpan = document.getElementById("spanFrontCamera");

    if (!FrontCameraInput.value.trim()) {

      frontCameraErrorSpan.innerText = "Vui lòng nhập FrontCamera";

      isValid = false;

      FrontCameraInput.classList.add("input-error");

    } 
    else {

      frontCameraErrorSpan.innerText = "";

      FrontCameraInput.classList.remove("input-error");
    }

    var nameInput = document.getElementById("name");

    var nameErrorSpan = document.getElementById("spanName");

    if (!nameInput.value.trim()) {

      nameErrorSpan.innerText = "Vui lòng nhập name";

      isValid = false;

      nameInput.classList.add("input-error");
    }
     else {

      nameErrorSpan.innerText = "";

      nameInput.classList.remove("input-error");
    }
  
    var priceInput = document.getElementById("price");

    var priceErrorSpan = document.getElementById("spanPrice");

    if (!priceInput.value.trim()) {

      priceErrorSpan.innerText = "Vui lòng nhập price";

      isValid = false;

      priceInput.classList.add("input-error");

    } else {

      priceErrorSpan.innerText = "";

      priceInput.classList.remove("input-error");
    }
  
    var screenInput = document.getElementById("screen");

    var screenErrorSpan = document.getElementById("spanScreen");

    if (!screenInput.value.trim()) {

      screenErrorSpan.innerText = "Vui lòng nhập screen";

      isValid = false;

      screenInput.classList.add("input-error");

    } else {
      screenErrorSpan.innerText = "";

      screenInput.classList.remove("input-error");
    }
  
    var typeInput = document.getElementById("type");

    var typeErrorSpan = document.getElementById("spanType");

    if (!typeInput.value.trim()) {

      typeErrorSpan.innerText = "Vui lòng nhập type";

      isValid = false;

      typeInput.classList.add("input-error");
      
    } else {
      typeErrorSpan.innerText = "";

      typeInput.classList.remove("input-error");
    }
    
    // Tương tự cho các trường khác...
    
    return isValid;
  }