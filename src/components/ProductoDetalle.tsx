import {
  Button,
  Modal,
  StyleSystemProvider,
  useToggle,
} from "@architecture-it/stylesystem";
import { useState } from "react";
import { toast } from "react-toastify";
import deleteProducto from "../servicio/DeleteProducto";
import putProducto from "../servicio/PutProducto";
import EliminarProducto from "./EliminarProducto";
import ModificarProducto from "./ModificarProducto";
import { ProductoProps } from "./ProductoInterface";

function ProductoDetalle(producto: ProductoProps, fetchProductos: () => void) {
  const [isOpen, { toggle }] = useToggle(false);
  const [isOpenEliminar, setEliminar] = useState(false);

  const togleEliminar = () => {
    setEliminar(!isOpenEliminar);
  };
  return (
    <>
      <StyleSystemProvider>
        <div className="productoItem" style={{ display: "flex", width: "95%" }}>
          <div
            style={{ display: "flex", width: "80%", height: "150px" }}
            className="productoItemDetalle"
            id={producto.id + ""}
          >
            <div style={{ width: "10%" }}>
              <h3>Id</h3>
              <h4>{producto.id}</h4>
            </div>
            <div style={{ width: "25%" }}>
              <h3>Nombre</h3>
              <h4>{producto.nombre}</h4>
            </div>
            <div style={{ width: "50%" }}>
              <h3>Descripcion</h3>
              <p>{producto.descripcion}</p>
            </div>
            <div style={{ width: "15%" }}>
              <h3>Imagen</h3>
              <a href="{producto.imagen}">{producto.imagen}</a>
            </div>
            <div>
              <h3>Precio</h3>
              <h4>{producto.precio}</h4>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "10%",
              margin: "auto auto",
              right: "20px",
            }}
          >
            <Button
              style={{ marginRight: "0px" }}
              fullWidth
              size="large"
              text="Editar"
              variant="outlined"
              onClick={() => toggle()}
            />
            <Button
              style={{ marginLeft: "10px" }}
              fullWidth
              size="large"
              text="Eliminar"
              variant="contained"
              onClick={() => togleEliminar()}
            />
          </div>
        </div>
        <Modal
          className="modal"
          // Tu funcion para cerrar el modal
          handleClose={toggle}
          title={"Editar producto: " + producto.id}
          open={isOpen}
          content={
            <>
              <ModificarProducto
                producto={producto}
                onSubmit={putProducto}
                dismiss={toggle}
                fetchProductos={fetchProductos}
              />
            </>
          }
        />
        <Modal
          className="modal"
          handleClose={togleEliminar}
          title={"Eliminar producto: " + producto.id}
          open={isOpenEliminar}
          content={
            <>
              <EliminarProducto
                onSubmit={deleteProducto}
                idProducto={producto.id}
                dismiss={togleEliminar}
              />
            </>
          }
        />
      </StyleSystemProvider>
    </>
  );
}

const eliminarProductoToast = (id: number, fetchProductos: () => void) => {
  const dismiss = () => toast.dismiss(this);
  toast(
    <>
      <h2>Eliminando {id}</h2>
      <EliminarProducto
        onSubmit={deleteProducto}
        idProducto={id}
        dismiss={dismiss}
      />
    </>
  );
};

export default ProductoDetalle;
