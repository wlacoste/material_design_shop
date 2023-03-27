import { Dispatch, SetStateAction } from "react";
import { Carrito } from "./Carrito";
import { ProductoProps } from "./ProductoInterface";
import ProductoTarjeta from "./ProductoTarjeta";

interface ListaTarjetasProps {
  productos: ProductoProps[];
  setCarrito: Dispatch<SetStateAction<number>>;
  carrito: number;
}

function ListaTarjetas({ productos, setCarrito, carrito }: ListaTarjetasProps) {
  const tarjetas = productos.map((producto, index) =>
    // ProductoTarjeta(producto, setCarrito, carrito)
    <ProductoTarjeta key={index} id={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} imagen={producto.imagen}/>
  );

  return (
    <>
      <Carrito numeroCarrito={carrito} />
      <div className="grilla_tarjetas">{tarjetas}</div>;
    </>
  );
}

export default ListaTarjetas;
