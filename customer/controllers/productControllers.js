const BASE_URL = "https://61029c2e79ed6800174821f1.mockapi.io/api/capstoneJS";
import { renderAllProducts } from "../services/main.js";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    setTimeout(() => {
      renderAllProducts(data);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};
