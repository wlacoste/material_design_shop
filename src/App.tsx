import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ProductoTarjeta from "./components/ProductoTarjeta";
import { StyleSystemProvider } from "@architecture-it/stylesystem";
import "./App.css";
import ProductoProps from "./components/ProductoInterface";
import ListaTarjetas from "./components/ListaTarjetas";

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

  const miArray = [];

  return (
    <>
      <StyleSystemProvider>
        <h1
          style={{
            color: "var(--primary)",
          }}
        >
          Hola
        </h1>

        <ListaTarjetas productos={[producto, producto2]} />
        <div style={{ display: "flex" }}>
          <ProductoTarjeta
            nombre="Zapatos"
            desc="Para caminar mucho"
            precio={200}
            imagen="15"
          />
          <ProductoTarjeta
            nombre="Zapatos"
            desc="Para caminar mucho"
            precio={200}
            imagen="16"
          />
        </div>
      </StyleSystemProvider>
    </>
  );
}

export default App;
