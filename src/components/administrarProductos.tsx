import { ProductoProps } from "./ProductoInterface";

interface ListaTarjetasProps {
  productos: ProductoProps[];
}

function ListaProductos({ productos }: ListaTarjetasProps) {
  const tarjetas = productos.map((producto) => ProductoDetalle(producto));

  return (
    <table className="tablaProductos">
      <tr>
        <th>Id</th>

        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Imagen</th>
        <th>Precio</th>
      </tr>
      {tarjetas}
    </table>
  );
}

export default ListaProductos;

function ProductoDetalle({
  id,
  nombre,
  descripcion,
  precio,
  imagen,
}: ProductoProps) {
  return (
    <tr className="productoItem">
      <td>{id}</td>

      <td>{nombre}</td>
      <td>{descripcion}</td>
      <td>{imagen}</td>
      <td>{precio}</td>
    </tr>
  );
}
