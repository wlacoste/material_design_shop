import { Dispatch, SetStateAction, useContext } from "react";
import { Carrito } from "./Carrito";
import { ProductoProps } from "./ProductoInterface";
import ProductoTarjeta from "./ProductoTarjeta";
import { ProductContext } from "../App";

interface ListaTarjetasProps {
  productos: ProductoProps[];
  setCarrito: Dispatch<SetStateAction<number>>;
  carrito: number;
}

function ListaTarjetas({ productos, setCarrito, carrito }: ListaTarjetasProps) {
  const [prodContext, setProdContext] = useContext(ProductContext);

  const tarjetas = prodContext.map((producto, index) => (
    <ProductoTarjeta
      key={index}
      id={producto.id}
      nombre={producto.title}
      descripcion={producto.description}
      precio={producto.price}
      imagen={producto.image}
      setCarrito={setCarrito}
      carrito={carrito}
    />
  ));

  return (
    <>
      <Carrito numeroCarrito={carrito} />
      <div className="grilla_tarjetas">{tarjetas}</div>;
    </>
  );
}

export default ListaTarjetas;
