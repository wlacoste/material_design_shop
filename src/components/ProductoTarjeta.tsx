import { Alert, StyleSystemProvider } from "@architecture-it/stylesystem";
import { DescriptionCard } from "@architecture-it/stylesystem/DescriptionCard";
import { Skeleton, Typography } from "@mui/material";
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductoProps } from "./ProductoInterface";
import "./ProductoTarjeta.css";

interface ProductoTarjetaProps {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  setCarrito: Dispatch<SetStateAction<number>>;
  carrito: number;
}

function ProductoTarjeta({
  id,
  nombre,
  descripcion,
  precio,
  imagen,
  setCarrito,
  carrito,
}: ProductoTarjetaProps) {
  let dimension = 300;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // return () => {
    //   setLoading(false);
    // };
  }, []);

  const anadirCarrito = () => {
    setCarrito((prev) => prev + 1);
    console.log(carrito);
  };

  return (
    <div className="product" id={"" + id}>
      <StyleSystemProvider>
        {loading ? (
          <Skeleton variant="rounded" height={531} animation="wave" />
        ) : (
          <>
            <DescriptionCard
              description={descripcion}
              imageProps={{
                alt: nombre,
                height: dimension,
                src: imagen,
                width: dimension,
              }}
              color="primary"
              onClick={() => {
                toast.success(nombre + " añadido al carrito", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 400,
                  hideProgressBar: true,
                });
                anadirCarrito();
                // console.log("hola");
              }}
              redirectText="Comprar"
              subtitle={"Precio: $" + precio}
              title={nombre}
              url="/"
              raised={true}
              variant="outlined"
            />
            <ToastContainer />
          </>
        )}
      </StyleSystemProvider>
    </div>
  );
}

export default ProductoTarjeta;
