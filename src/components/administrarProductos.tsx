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
  const tarjetas = productos.map((producto, index) =>
    // ProductoDetalle(producto, setToggle)
    <ProductoDetalle key={index} producto={producto} setToggle={setToggle}/>
  );

  return (
    <>
      <NuevoProducto setToggle={setToggle} />
      {tarjetas}
      <ToastContainer
         limit={3}
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
