import { renderData } from "../services/base.js";
import { showDeleteSuccess, showErrorMessage, showUpdateSuccess, showAddCartSuccess } from "./show.js";
const BASE_URL = "https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS";

export const getData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("products", JSON.stringify(data));

    setTimeout(() => {
      renderData(data);
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

export function handleEdit(id) {
  axios
    .get(`${BASE_URL}/${id}`)
    .then(function (res) {
      showDataForm(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

export function handleDelete(id) {
  axios
    .delete(`${BASE_URL}/${id}`)
    .then(function (res) {
      getData();
      showDeleteSuccess();
    })
    .catch(function (err) {
      console.log(err);
    });
}

var initialProductData = {};
function showDataForm(data) {
  // Điền dữ liệu từ 'data' vào các trường form
  document.getElementById("Id").value = data.id;
  document.getElementById("desc").value = data.desc;
  document.getElementById("name").value = data.name;
  document.getElementById("price").value = data.price;
  document.getElementById("backCamera").value = data.backCamera;
  document.getElementById("frontCamera").value = data.frontCamera;
  document.getElementById("type").value = data.type;
  document.getElementById("screen").value = data.screen;

  initialProductData = {
    desc: data.desc,
    name: data.name,
    price: data.price,
    id: data.id,
    backCamera: data.backCamera,
    frontCamera: data.frontCamera,
    type: data.type,
    screen: data.screen,
  };
}

function getDataForm() {
  // Lấy dữ liệu từ các trường form
  var _desc = document.getElementById("desc").value;
  var _name = document.getElementById("name").value;
  var _price = document.getElementById("price").value;
  var _id = document.getElementById("Id").value;
  var _backCamera = document.getElementById("backCamera").value;
  var _frontCamera = document.getElementById("frontCamera").value;
  var _type = document.getElementById("type").value;
  var _screen = document.getElementById("screen").value;
  return {
    desc: _desc,
    name: _name,
    price: _price,
    id: _id,
    backCamera: _backCamera,
    frontCamera: _frontCamera,
    type: _type,
    screen: _screen,
  };
}

export function handleUpdate() {
  var products = getDataForm();
  var isFormValid = validateForm();
  var isEdited = isDataEdited(products);

  if (!isFormValid) {
    return;
  }
  if (!isEdited) {
    $('#exampleModal').modal('hide');
    showErrorMessage();
    return;
  }
  axios
    .put(`${BASE_URL}/${products.id}`, products)
    .then(function (res) {
      getData();
      showUpdateSuccess();
      $('#exampleModal').modal('hide');
    })
    .catch(function (err) {
      console.log(err);
    });
}

export function handleAddCart() {
  var _desc = document.getElementById("addDesc").value;
  var _name = document.getElementById("addName").value;
  var _price = document.getElementById("addPrice").value;
  var _id = document.getElementById("addId").value;
  var _backCamera = document.getElementById("addBackCamera").value;
  var _frontCamera = document.getElementById("addFrontCamera").value;
  var _type = document.getElementById("addType").value;
  var _screen = document.getElementById("addScreen").value;
  var _image = document.getElementById("addImage").value;
  var isFormValid = validateFormAdd();
  if (!isFormValid) {
    return;
  }
  // Tạo một đối tượng mới chứa dữ liệu
   var data =  {
    desc: _desc,
    name: _name,
    price: _price,
    id: _id,
    backCamera: _backCamera,
    frontCamera: _frontCamera,
    type: _type,
    screen: _screen,
    img: _image
  };
  axios.post('https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS', data)
    .then(function (response) {
      getData();
      showAddCartSuccess();
      $('#addModal').modal('hide');
    })
    .catch(function (error) {
    });
};
export function handleCloseFormAdd() {
    
    document.getElementById("addDesc").value = "";
    document.getElementById("addName").value = "";
    document.getElementById("addPrice").value = "";
    document.getElementById("addId").value = "";
    document.getElementById("addBackCamera").value = "";
    document.getElementById("addFrontCamera").value = "";
    document.getElementById("addType").value = "";
    document.getElementById("addScreen").value = "";
    document.getElementById("addImage").value = "";
   
    $('#myModal').modal('show');
}

export function handleCloseFormEdit() {
    
  document.getElementById("desc").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("Id").value = "";
  document.getElementById("backCamera").value = "";
  document.getElementById("frontCamera").value = "";
  document.getElementById("type").value = "";
  document.getElementById("screen").value = "";
  document.getElementById("image").value = "";
 
  $('#myModal').modal('show');
}
function isDataEdited(products) {
  
  var hasChanged =
    products.name !== initialProductData.name ||
    products.desc !== initialProductData.desc ||
    products.price !== initialProductData.price ||
    products.backCamera !== initialProductData.backCamera ||
    products.frontCamera !== initialProductData.frontCamera ||
    products.type !== initialProductData.type ||
    products.screen !== initialProductData.screen ||
    products.id !== initialProductData.id;

  return hasChanged;
}











