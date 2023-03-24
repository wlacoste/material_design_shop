import {
  Button,
  Modal,
  StyleSystemProvider,
  useToggle,
} from "@architecture-it/stylesystem";
import { toast } from "react-toastify";
import deleteProducto from "../servicio/DeleteProducto";
import putProducto from "../servicio/PutProducto";
import EliminarProducto from "./EliminarProducto";
import ModificarProducto from "./ModificarProducto";
import { ProductoProps } from "./ProductoInterface";

function ProductoDetalle(producto: ProductoProps, fetchProductos: () => void) {
  const [isOpen, { toggle }] = useToggle(false);

  return (
    <>
      <div className="productoItem" id={producto.id + ""}>
        <h4>{producto.id}</h4>
        <h4>{producto.nombre}</h4>
        <h4>{producto.descripcion}</h4>
        <h4>{producto.imagen}</h4>
        <h4>{producto.precio}</h4>
        <button
          onClick={() => editarProductoModal(producto.id, toggle, isOpen)}
        >
          Editar
        </button>
        <button
          onClick={() => eliminarProductoToast(producto.id, fetchProductos)}
        >
          Eliminar
        </button>
      </div>
      <StyleSystemProvider>
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
      </StyleSystemProvider>
    </>
  );
}

const editarProductoModal = (
  id: number,
  toggle: () => void,
  isOpen: boolean
) => {
  toggle();
  console.log(isOpen);
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

export default ProductoDetalle;
