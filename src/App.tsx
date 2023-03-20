import { useState } from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
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
import RootLayout from "./layout/Layout";
import ListaProductos from "./components/administrarProductos";

const productos: ProductoProps[] = await GetProductos();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ListaTarjetas productos={productos} />} />
      <Route
        path="nuevo"
        element={<NuevoProducto onSubmit={guardarProducto} />}
      />
      <Route
        path="administrar"
        element={<ListaProductos productos={productos} />}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
