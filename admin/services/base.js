import { getData } from "../controllers/dataControllers.js";
import { handleEdit,handleUpdate, handleDelete } from "../controllers/dataControllers.js";
export const renderData = (products) => {
    let innerHTML = "";
    products.map((product) => {
      return (innerHTML += `
      <tr>
      <th scope="row">${product.id}</th>
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
getData()