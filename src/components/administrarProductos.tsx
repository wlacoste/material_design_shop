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
  const [tarjetas, setTarjetas] = useState<JSX.Element[]>(
    productos.map((producto) => ProductoDetalle(producto, fetchProductos))
  );

  useEffect(() => {
    //hago copia del array de productos.. por si jode con que no cambia el estado

    const productosCopy = productos.map((x) => x);
    setTarjetas(
      productosCopy.map((producto) => ProductoDetalle(producto, fetchProductos))
    );
  }, [productos]);

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

const editarProductoToast = (id: number, fetchProductos: () => void) => {
  const dismiss = () => toast.dismiss(this);
  toast(
    <>
      <button onClick={dismiss}>Cancelar</button>
      <ModificarProducto
        onSubmit={putProducto}
        idProducto={id}
        dismiss={dismiss}
        fetchProductos={fetchProductos}
      />
    </>
    // fetchProductos()
  );
};

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

function ProductoDetalle(
  { id, nombre, descripcion, precio, imagen }: ProductoProps,
  fetchProductos: () => void
) {
  return (
    <div className="productoItem" id={id + ""}>
      <h4>{id}</h4>
      <h4>{nombre}</h4>
      <h4>{descripcion}</h4>
      <h4>{imagen}</h4>
      <h4>{precio}</h4>
      <button onClick={() => editarProductoToast(id, fetchProductos)}>
        Editar
      </button>
      <button onClick={() => eliminarProductoToast(id, fetchProductos)}>
        Eliminar
      </button>
    </div>
  );
}

export default ListaProductos;
