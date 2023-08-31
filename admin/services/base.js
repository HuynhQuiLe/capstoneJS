import { getData } from "../controllers/dataControllers.js";
import { handleEdit,handleUpdate, handleDelete, handleCloseFormAdd, handleCloseFormEdit,handleAddCart} from "../controllers/dataControllers.js";
import { validateForm } from "../controllers/validate.js";
import { validateFormAdd } from "../controllers/validate_v2.js";
export const renderData = (products) => {
    let innerHTML = "";
    products.map((product, index) => {
      return (innerHTML += `
      <tr>
      <th scope="row">${index + 1}</th>
      <td>${product.name}</td>
      <td>${product.desc}</td>
      <td>$${product.price}</td>
      <td>
       <img src="${product.img}" alt="${product.name}" class="card-img-top"/>
      </td>
      <td>
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onclick="handleEdit(${product.id})">
            Edit
      </button>
        <button type="button" class="btn btn-primary" onclick="handleDelete(${product.id})">
        Delete
      </button>
     </td>
      </tr>
          `);
    });
  
    document.querySelector("#product").innerHTML = innerHTML;
  };
window.getData = getData;
window.renderData = renderData;
window.handleEdit = handleEdit;
window.handleUpdate = handleUpdate;
window.handleDelete = handleDelete;
window.validateForm = validateForm;
window.handleCloseFormAdd = handleCloseFormAdd;
window.handleCloseFormEdit= handleCloseFormEdit;
window.handleAddCart = handleAddCart;
window.validateFormAdd = validateFormAdd;
getData()