import { ProductoProps } from "./ProductoInterface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NuevoProducto from "./NuevoProducto";
import guardarProducto from "./guardarProducto";
import ModificarProducto from "./ModificarProducto";
import putProducto from "../servicio/PutProducto";
import React from "react";
interface ListaTarjetasProps {
  productos: ProductoProps[];
}

function ListaProductos({ productos }: ListaTarjetasProps) {
  const tarjetas = productos.map((producto) => ProductoDetalle(producto));

  return (
    <>
      <table className="tablaProductos">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Imagen</th>
          <th>Precio</th>
        </tr>
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

const editarProductoToast = (id: number) => {
  const dismiss = () => toast.dismiss(this);
  toast(
    <>
      <button onClick={dismiss}>Cancelar</button>
      <ModificarProducto
        onSubmit={putProducto}
        idProducto={id}
        dismiss={dismiss}
      />
    </>
  );
};

const eliminarProductoToast = (id: number) => {
  toast(
    <>
      <h2>Eliminando {id}</h2>
      <NuevoProducto onSubmit={guardarProducto} />
    </>
  );
};

function ProductoDetalle({
  id,
  nombre,
  descripcion,
  precio,
  imagen,
}: ProductoProps) {
  return (
    <div className="productoItem">
      <div>{id}</div>
      <div>{nombre}</div>
      <div>{descripcion}</div>
      <div>{imagen}</div>
      <div>{precio}</div>
      <button onClick={() => editarProductoToast(id)}>Editar</button>
      <button onClick={() => eliminarProductoToast(id)}>Eliminar</button>
    </div>
  );
}
