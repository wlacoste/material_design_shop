import axios from "axios";
import { ProductoProps } from "../components/ProductoInterface";

async function GetProductos() {
  const response = await axios.get("http://localhost:3000/productos");
  return response.data as ProductoProps[];
}

export default GetProductos;
