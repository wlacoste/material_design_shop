import { ProductoProps } from "./ProductoInterface";
import ProductoTarjeta from "./ProductoTarjeta";

interface ListaTarjetasProps {
  productos: ProductoProps[];
}

function ListaTarjetas({ productos }: ListaTarjetasProps) {
  const tarjetas = productos.map((producto) => ProductoTarjeta(producto));
  //   const tarjetas = {productos.forEach((element) =>
  //     ProductoTarjeta(element);
  //   });

  return <div className="grilla_tarjetas">{tarjetas}</div>;
}

export default ListaTarjetas;
