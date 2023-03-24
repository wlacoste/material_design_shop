import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import ProductoTarjeta from "./components/ProductoTarjeta";
import {
  Button,
  Card,
  Footer,
  StyleSystemProvider,
} from "@architecture-it/stylesystem";
import { Header } from "@architecture-it/stylesystem";
import { Sidebar } from "@architecture-it/stylesystem";
import { useToggle } from "@architecture-it/stylesystem";
import "./App.css";
import { ProductoProps } from "./components/ProductoInterface";
import ListaTarjetas from "./components/ListaTarjetas";
import GetProductos from "./servicio/GetProductos";
import NuevoProducto from "./components/NuevoProducto";
import guardarProducto from "./components/guardarProducto";
import RootLayout from "./layout/Layout";
import ListaProductos from "./components/administrarProductos";
import { LinkToggleSidebar } from "./layout/LinkToggleSideBar";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterVentas } from "./layout/FooterVentas";

const data = await GetProductos();

function App() {
  const [productos, setProductos] = useState<ProductoProps[]>(
    data as ProductoProps[]
  );
  const [isOpen, { toggle }] = useToggle(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout toggle={toggle} />}>
        <Route index element={<ListaTarjetas productos={productos} />} />
        <Route
          path="nuevo"
          element={<NuevoProducto onSubmit={guardarProducto} />}
        />
        <Route
          path="administrar"
          element={
            <ListaProductos productos={productos} setProductos={setProductos} />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <StyleSystemProvider>
        <Sidebar
          onClose={toggle}
          onOpen={function noRefCheck() {}}
          routes={[
            {
              item: (
                <BrowserRouter>
                  <Box marginY="15px" padding={0} width="100%">
                    <LinkToggleSidebar link="/" valor="Home" toggle={toggle} />
                  </Box>
                </BrowserRouter>
              ),
              style: {
                maxHeight: "90px",
                maxWidth: "400px",
                minWidth: "300px",
                transitionDuration: "500ms",
              },
            },
            {
              item: (
                <BrowserRouter>
                  <Box
                    className="boxName"
                    marginY="15px"
                    padding={0}
                    width="100%"
                  >
                    <LinkToggleSidebar
                      link="administrar"
                      valor="Administrar"
                      toggle={toggle}
                    />
                  </Box>
                </BrowserRouter>
              ),
              style: {
                maxHeight: "90px",
                maxWidth: "400px",
                transitionDuration: "500ms",
              },
            },
          ]}
          open={isOpen}
        />
      </StyleSystemProvider>
      <RouterProvider router={router} />

      <StyleSystemProvider>
        <FooterVentas />
      </StyleSystemProvider>
    </>
  );
}

export default App;
