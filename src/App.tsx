import { useEffect, useState } from "react";
import { Route, Routes,} from "react-router-dom";
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



export const ProductContext = React.createContext<[ProductoProps[],React.Dispatch<React.SetStateAction<ProductoProps[]>>]>([[],()=>{}]);

export default function App() {
  const [productos, setProductos] = useState<ProductoProps[]>([]);
  const [isOpen, { toggle }] = useToggle(false);
  const [carrito, setCarrito] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [changeToggle, setToggle] = useState(false);

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

  return(
    <>
      <ProductContext.Provider value={[productos,setProductos]}>
      <Sidebar
          onClose={toggle}
          onOpen={function noRefCheck() {}}
          routes={[
            {
              item: (
                  <Box marginY="15px" padding={0} width="100%">
                    <LinkToggleSidebar link="/" valor="Home" toggle={toggle} />
                  </Box>
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

      <Routes>
        <Route path="/" element={<RootLayout toggle={toggle} />}>
          <Route index element={ <ListaTarjetas productos={productos} setCarrito={setCarrito} carrito={carrito}/>}/>
          <Route path="administrar" element={ <ListaProductos productos={productos} setToggle={setToggle} /> } />
          <Route path="*" element={<ListaTarjetas productos={productos} setCarrito={setCarrito} carrito={carrito} />} />
        </Route>
      </Routes>
      </ProductContext.Provider>
      <StyleSystemProvider>
        <FooterVentas />
      </StyleSystemProvider>
    </>
  );

}

