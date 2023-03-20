import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ProductoTarjeta from "./components/ProductoTarjeta";
import { Card } from "@architecture-it/stylesystem";
import { Header } from "@architecture-it/stylesystem";
import { Sidebar } from "@architecture-it/stylesystem";

import "./App.css";
import { ProductoProps } from "./components/ProductoInterface";
import ListaTarjetas from "./components/ListaTarjetas";
import GetProductos from "./servicio/GetProductos";
import NuevoProducto from "./components/NuevoProducto";
import guardarProducto from "./components/guardarProducto";

function App() {
  const [count, setCount] = useState(0);

  const producto: ProductoProps = {
    nombre: "Maceta",
    desc: "para plantas",
    precio: 542,
    imagen: "10",
  };
  const producto2: ProductoProps = {
    nombre: "Zapatos",
    desc: "para caminar",
    precio: 745,
    imagen: "25",
  };
  const productos: ProductoProps[] = GetProductos();

  return (
    <>
      <Header onClickButton={() => {}}>Administrar</Header>
      <Card
        className="tarjeta"
        imageProps={{
          alt: "tutoriales",
          src: "https://a.storyblok.com/f/63950/402x293/6b8cd64271/tutoriales.jpg",
        }}
        onClick={() => {}}
        principalText="¿Cómo cambiar entrega en domicilio a retiro en sucursal?"
        secondaryText="ver vídeo"
        url=" url"
      />

      <ListaTarjetas productos={productos} />
      <NuevoProducto onSubmit={guardarProducto} />
    </>
  );
}

export default App;
