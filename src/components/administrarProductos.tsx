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
      <table className="tablaProductos">
        <thead>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Imagen</th>
          <th>Precio</th>
        </thead>
      </table>
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
