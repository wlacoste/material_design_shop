import { Dispatch, SetStateAction } from "react";
import { ProductoProps } from "./ProductoInterface";
import ProductoTarjeta from "./ProductoTarjeta";

interface ListaTarjetasProps {
  productos: ProductoProps[];
  setCarrito: Dispatch<SetStateAction<number>>;
  carrito: number;
}

function ListaTarjetas({ productos, setCarrito, carrito }: ListaTarjetasProps) {
  const tarjetas = productos.map((producto) =>
    ProductoTarjeta(producto, setCarrito, carrito)
  );

  return <div className="grilla_tarjetas">{tarjetas}</div>;
}

export default ListaTarjetas;
