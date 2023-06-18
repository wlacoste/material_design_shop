import axios from "axios";
import { ProductoProps } from "../components/ProductoInterface";

async function GetProductos() {
  const response = await axios.get("http://localhost:3000/productos");
  const res = await axios.get("https://fakestoreapi.com/products");

  return res.data as ProductoProps[];
}

export default GetProductos;
