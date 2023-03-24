import { ProductoProps } from "./ProductoInterface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NuevoProducto from "./NuevoProducto";
import guardarProducto from "./guardarProducto";
import ModificarProducto from "./ModificarProducto";
import putProducto from "../servicio/PutProducto";
import React, { useEffect, useState } from "react";
import GetProductos from "../servicio/GetProductos";
import EliminarProducto from "./EliminarProducto";
import deleteProducto from "../servicio/DeleteProducto";
import ProductoDetalle from "./ProductoDetalle";
import { Carrito } from "./Carrito";
interface ListaTarjetasProps {
  productos: ProductoProps[];
  setProductos: React.Dispatch<React.SetStateAction<ProductoProps[]>>;
}

function ListaProductos({ productos, setProductos }: ListaTarjetasProps) {
  const fetchProductos = async () => {
    //sera un closure?
    const data: ProductoProps[] = await GetProductos();
    setProductos(data);
  };

  const tarjetas = productos.map((producto) =>
    ProductoDetalle(producto, fetchProductos)
  );

  return (
    <>
      <NuevoProducto fetchProductos={fetchProductos} />
      {tarjetas}
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </>
  );
}

export default ListaProductos;
