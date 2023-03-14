import ProductoProps from "./ProductoInterface";
import "./ProductoTarjeta.css";

function ProductoTarjeta({ nombre, desc, precio, imagen }: ProductoProps) {
  return (
    <div className="tarjeta">
      <img src={"https://randomfox.ca/images/" + imagen + ".jpg"} alt="zorro" />
      <h2 className="nombre_producto">{nombre}</h2>
      <p className="descripcion_producto">{desc}</p>
      <h2 className="precio">{precio}</h2>
    </div>
  );
}

export default ProductoTarjeta;
