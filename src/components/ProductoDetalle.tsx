import {
  Button,
  Modal,
  StyleSystemProvider,
  useToggle,
} from "@architecture-it/stylesystem";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import deleteProducto from "../servicio/DeleteProducto";
import putProducto from "../servicio/PutProducto";
import EliminarProducto from "./EliminarProducto";
import ModificarProducto from "./ModificarProducto";
import { ProductoProps } from "./ProductoInterface";
import { ProductContext } from "../App";

interface ProductoDetalleProps{
  producto: ProductoProps,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

function ProductoDetalle(
  {producto, setToggle}: ProductoDetalleProps
) {
  const [isOpen, { toggle }] = useToggle(false);
  const [isOpenEliminar, setEliminar] = useState(false);
  const url = producto.image.replace("https:",'');
  const [prodContext, setProdContext] = useContext(ProductContext);


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
            <div style={{ width: "20%" }}>
              <h3>Nombre</h3>
              <h4>{producto.title}</h4>
            </div>
            <div style={{ width: "40%", paddingRight: "10px" }}>
              <h3>Descripcion</h3>
              <p>{producto.description}</p>
            </div>
            <div
            className="ImagenURLdiv"
              style={{
                width: "30%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <h3>Imagen</h3>
              <a id="imagenURL" style={{overflow:"scroll", height:"150px"}}href={url}>{producto.image}</a>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <h3>Precio</h3>
              <h4>{producto.price}</h4>
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
                isUpdate={true}
                dismiss={toggle}
                setToggle={setToggle}
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
                onSubmit={()=>{setProdContext(prodContext.filter(x => x.id != producto.id))}}
                idProducto={producto.id}
                dismiss={togleEliminar}
                setToggle={setToggle}
              />
            </>
          }
        />
      </StyleSystemProvider>
    </>
  );
}

export default ProductoDetalle;
