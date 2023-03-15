import axios from "axios";
import { useEffect, useState } from "react";
import { ProductoProps } from "../components/ProductoInterface";

function GetProductos(): ProductoProps[] {
  const [productos, setProductos] = useState<ProductoProps[]>([
    {
      nombre: "Zapatos",
      desc: "para caminar",
      precio: 745,
      imagen: "25",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/productos")
      .then((res) => {
        console.log(res.data);
        let productos = res.data as ProductoProps[];
        setProductos(productos);
      })
      .catch(console.log);
  }, []);

  return productos;
}

export default GetProductos;
