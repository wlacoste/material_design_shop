import { Alert, StyleSystemProvider } from "@architecture-it/stylesystem";
import { DescriptionCard } from "@architecture-it/stylesystem/DescriptionCard";
import { Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductoProps } from "./ProductoInterface";
import "./ProductoTarjeta.css";

function ProductoTarjeta(
  { id, nombre, descripcion, precio, imagen }: ProductoProps,
  setCarrito: Dispatch<SetStateAction<number>>,
  carrito: number
) {
  return (
    <div className="product" id={"" + id}>
      <StyleSystemProvider>
        <DescriptionCard
          description={descripcion}
          imageProps={{
            alt: nombre,
            height: 300,
            src: imagen,
            width: 300,
          }}
          color="primary"
          onClick={() => {
            toast.success(nombre + " añadido al carrito", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 400,
              hideProgressBar: true,
            });
            setCarrito(carrito + 1);
          }}
          redirectText="Comprar"
          subtitle={"Precio: $" + precio}
          title={nombre}
          url="/"
          raised={true}
          variant="outlined"
        />
        <ToastContainer />
      </StyleSystemProvider>
    </div>
  );
}

export default ProductoTarjeta;
