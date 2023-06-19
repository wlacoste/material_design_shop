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
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NuevoProducto: React.FC<NuevoProductoProps> = ({ setToggle }) => {
  const [isOpen, { toggle }] = useToggle(false);
  let producto: ProductoProps = {
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
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
          onClick={toggle}
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
                onSubmit={guardarProducto}
                producto={producto}
                isUpdate={false}
                dismiss={toggle}
                setToggle={setToggle}
              />
            </>
          }
        />
      </StyleSystemProvider>
    </>
  );
};

export default NuevoProducto;
