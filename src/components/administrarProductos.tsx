import { ProductoProps } from "./ProductoInterface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NuevoProducto from "./NuevoProducto";
import React from "react";
import ProductoDetalle from "./ProductoDetalle";
interface ListaTarjetasProps {
  productos: ProductoProps[];
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function ListaProductos({ productos, setToggle }: ListaTarjetasProps) {
  const tarjetas = productos.map((producto) =>
    ProductoDetalle(producto, setToggle)
  );

  return (
    <>
      <NuevoProducto setToggle={setToggle} />
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
