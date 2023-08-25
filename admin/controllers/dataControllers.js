 const BASE_URL = "https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS";
import { renderData } from "../services/base.js";
export const getData = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      // Luu data vao localStorage
      localStorage.setItem("products", JSON.stringify(data));
      setTimeout(() => {
        renderData(data);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  export function handleEdit(id) {
    axios({
      url: `https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS/${id}`,
      method: "GET",
    })
    .then(function (res) {
      showDataForm(res.data);
    })
    .catch(function (err) {
    });
  }
function showDataForm (data) {
    document.getElementById("Id").value = data.id;
    document.getElementById("backCamera").value = data.backCamera;
    document.getElementById("desc").value = data.desc;
    document.getElementById("frontCamera").value = data.frontCamera;
    document.getElementById("name").value = data.name;
    document.getElementById("price").value = data.price;
    document.getElementById("screen").value = data.screen;
    document.getElementById("type").value = data.type;
}
function getDataForm () {
  var _desc = document.getElementById("desc").value ;
  var _name = document.getElementById("name").value ;
  var _price = document.getElementById("price").value ;
  var _id = document.getElementById("Id").value;
  return {
    desc : _desc,
    name: _name,
    price: _price,
    id: _id,
  }
}
export function handleUpdate() {
  var product = getDataForm();
  axios({
    url: `https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS/${product.id}`,
    method: "PUT",
    data: product,
  })
  .then(function (res) {
    getData();
    renderData(res.data);
  })
  .catch(function (err) {
  });
}