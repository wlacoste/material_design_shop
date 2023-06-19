import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { StyleSystemProvider } from "@architecture-it/stylesystem";
import { Sidebar } from "@architecture-it/stylesystem";
import { useToggle } from "@architecture-it/stylesystem";
import "./App.css";
import { ProductoProps } from "./components/ProductoInterface";
import ListaTarjetas from "./components/ListaTarjetas";
import GetProductos from "./servicio/GetProductos";
import RootLayout from "./layout/Layout";
import ListaProductos from "./components/administrarProductos";
import { LinkToggleSidebar } from "./layout/LinkToggleSideBar";
import { Box } from "@mui/material";
import { FooterVentas } from "./layout/FooterVentas";
import React from "react";
import { ThemeContext } from "@emotion/react";

export const ProductContext = React.createContext<[ProductoProps[],React.Dispatch<React.SetStateAction<ProductoProps[]>>]>([[],()=>{}]);

function App() {
  const [productos, setProductos] = useState<ProductoProps[]>([]);
  const [isOpen, { toggle }] = useToggle(false);

  const [carrito, setCarrito] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  const [changeToggle, setToggle] = useState(false);

  const [routers, setRoutes] = useState(
    createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout toggle={toggle} />}>
          <Route
            index
            element={
              <ListaTarjetas
                productos={productos}
                setCarrito={setCarrito}
                carrito={carrito}
              />
            }
          />
          <Route
            path="administrar"
            element={
              <ListaProductos productos={productos} setToggle={setToggle} />
            }
          />
        </Route>
      )
    )
  );

  useEffect(() => {
    const fetchData = async () => {
      const datos = await GetProductos();
      await setProductos(datos);
    };
    if(firstLoad){
      fetchData().catch(console.error);
      setFirstLoad(false);
    }
    
  }, [changeToggle]);

  useEffect(() => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout toggle={toggle} />}>
          <Route
            index
            element={
              <ListaTarjetas
                productos={productos}
                setCarrito={setCarrito}
                carrito={carrito}
              />
            }
          />
          <Route
            path="administrar"
            element={
              <ListaProductos productos={productos} setToggle={setToggle} />
            }
          />
        </Route>
      )
    );
    setRoutes(router);
  }, [productos, isOpen, carrito]);

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
      <ProductContext.Provider value={[productos,setProductos]}>
      <RouterProvider router={routers} />
      </ProductContext.Provider>
      <StyleSystemProvider>
        <FooterVentas />
      </StyleSystemProvider>
    </>
  );
}

export default App;
