import { StyleSystemProvider } from "@architecture-it/stylesystem";
import { DescriptionCard } from "@architecture-it/stylesystem/DescriptionCard";
import { ProductoProps } from "./ProductoInterface";
import "./ProductoTarjeta.css";

function ProductoTarjeta({
  id,
  nombre,
  descripcion,
  precio,
  imagen,
}: ProductoProps) {
  return (
    <div className="product" id={"" + id}>
      <StyleSystemProvider>
        <DescriptionCard
          description={descripcion}
          imageProps={{
            alt: nombre,
            height: 300,
            src: imagen,
            width: 300,
          }}
          color="primary"
          onClick={() => {}}
          redirectText="Comprar"
          subtitle={"Precio: $" + precio}
          title={nombre}
          url="/"
          raised={true}
          variant="outlined"
        />
      </StyleSystemProvider>
    </div>
  );
}

export default ProductoTarjeta;
