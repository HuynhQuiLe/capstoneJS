export function validateFormAdd() {
    var isValid = true;
    
    var idInput = document.getElementById("addId");

    var idErrorSpan = document.getElementById("spanAddId");

    if (!idInput.value.trim()) {

      idErrorSpan.innerText = "Vui lòng nhập id";

      isValid = false;

      idInput.classList.add("input-error");

    } 
    else {
      idErrorSpan.innerText = "";

      idInput.classList.remove("input-error");
    }

    var backCameraInput = document.getElementById("addBackCamera");

    var backCameraErrorSpan = document.getElementById("spanAddBackCamera");

    if (!backCameraInput.value.trim()) {

      backCameraErrorSpan.innerText = "Vui lòng nhập BackCamera";

      isValid = false;

      backCameraInput.classList.add("input-error");

    } 
    else {
      backCameraErrorSpan.innerText = "";

      backCameraInput.classList.remove("input-error");
    }
    
    var descInput = document.getElementById("addDesc");

    var descErrorSpan = document.getElementById("spanAddDesc");

    if (!descInput.value.trim()) {

      descErrorSpan.innerText = "Vui lòng nhập desc";

      isValid = false;

      descInput.classList.add("input-error");

    } 
    else {
      descErrorSpan.innerText = "";

      descInput.classList.remove("input-error");
    }
  
    var FrontCameraInput = document.getElementById("addFrontCamera");

    var frontCameraErrorSpan = document.getElementById("spanAddFrontCamera");

    if (!FrontCameraInput.value.trim()) {

      frontCameraErrorSpan.innerText = "Vui lòng nhập FrontCamera";

      isValid = false;

      FrontCameraInput.classList.add("input-error");

    } 
    else {

      frontCameraErrorSpan.innerText = "";

      FrontCameraInput.classList.remove("input-error");
    }

    var nameInput = document.getElementById("addName");

    var nameErrorSpan = document.getElementById("spanAddName");

    if (!nameInput.value.trim()) {

      nameErrorSpan.innerText = "Vui lòng nhập name";

      isValid = false;

      nameInput.classList.add("input-error");
    }
     else {

      nameErrorSpan.innerText = "";

      nameInput.classList.remove("input-error");
    }
  
    var priceInput = document.getElementById("addPrice");

    var priceErrorSpan = document.getElementById("spanAddPrice");

    if (!priceInput.value.trim()) {

      priceErrorSpan.innerText = "Vui lòng nhập price";

      isValid = false;

      priceInput.classList.add("input-error");

    } else {

      priceErrorSpan.innerText = "";

      priceInput.classList.remove("input-error");
    }
  
    var screenInput = document.getElementById("addScreen");

    var screenErrorSpan = document.getElementById("spanAddScreen");

    if (!screenInput.value.trim()) {

      screenErrorSpan.innerText = "Vui lòng nhập screen";

      isValid = false;

      screenInput.classList.add("input-error");

    } else {
      screenErrorSpan.innerText = "";

      screenInput.classList.remove("input-error");
    }
  
    var typeInput = document.getElementById("addType");

    var typeErrorSpan = document.getElementById("spanAddType");

    if (!typeInput.value.trim()) {

      typeErrorSpan.innerText = "Vui lòng nhập type";

      isValid = false;

      typeInput.classList.add("input-error");
      
    } else {
      typeErrorSpan.innerText = "";

      typeInput.classList.remove("input-error");
    }
    
    var imageInput = document.getElementById("addImage");

    var imageErrorSpan = document.getElementById("spanAddImage");

    if (!imageInput.value.trim()) {

        imageErrorSpan.innerText = "Vui lòng nhập link hình ảnh";

      isValid = false;

      imageInput.classList.add("input-error");
      
    } else {
      imageErrorSpan.innerText = "";

      imageInput.classList.remove("input-error");
    }
    
    // Tương tự cho các trường khác...
    
    return isValid;
  }