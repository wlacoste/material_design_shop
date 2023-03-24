import ProductoTarjeta from "./ProductoTarjeta";

import React, { useState } from "react";
import ModificarProducto from "./ModificarProducto";
import {
  Button,
  Modal,
  StyleSystemProvider,
  useToggle,
} from "@architecture-it/stylesystem";
import { ProductoProps } from "./ProductoInterface";
import guardarProducto from "./guardarProducto";

interface NuevoProductoProps {
  fetchProductos: () => void;
}

function NuevoProducto({ fetchProductos }: NuevoProductoProps) {
  const [isOpen, { toggle }] = useToggle(false);
  let producto: ProductoProps = {
    id: 0,
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: 0,
  };
  return (
    <>
      <StyleSystemProvider>
        <Button
          style={{ margin: "10px" }}
          key="2"
          size="large"
          text="Nuevo Producto"
          variant="contained"
          onClick={() => editarProductoModal(toggle, isOpen)}
        />
        <Modal
          className="modal"
          // Tu funcion para cerrar el modal
          handleClose={toggle}
          title={"Nuevo producto: "}
          open={isOpen}
          content={
            <>
              <ModificarProducto
                producto={producto}
                onSubmit={guardarProducto}
                dismiss={toggle}
                fetchProductos={fetchProductos}
              />
            </>
          }
        />
      </StyleSystemProvider>
    </>
  );
}

const editarProductoModal = (toggle: () => void, isOpen: boolean) => {
  toggle();
  console.log(isOpen);
};

export default NuevoProducto;
