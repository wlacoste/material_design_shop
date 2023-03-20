import { ProductoProps } from "./ProductoInterface";
import "./ProductoTarjeta.css";

function ProductoTarjeta({
  nombre,
  descripcion,
  precio,
  imagen,
}: ProductoProps) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt="zorro" />
      <h2 className="nombre_producto">{nombre}</h2>
      <p className="descripcion_producto">{descripcion}</p>
      <h2 className="precio">{precio}</h2>
    </div>
  );
}

export default ProductoTarjeta;
