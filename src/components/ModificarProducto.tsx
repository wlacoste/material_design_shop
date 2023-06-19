import React, { useContext, useState } from "react";
import { ProductoProps } from "./ProductoInterface";
import { Button } from "@architecture-it/stylesystem";
import { TextField } from "@mui/material";
import { isImgUrl } from "../helper/isImgUrl";
import { ProductContext } from "../App";

interface ModificarProductoProps {
  onSubmit: (
    id: number,
    nombre: string,
    descripcion: string,
    number: number,
    imagen: string,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  isUpdate: boolean;
  producto: ProductoProps;
  dismiss: () => void;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModificarProducto: React.FC<ModificarProductoProps> = ({
  onSubmit,
  producto,
  dismiss,
  setToggle,
  isUpdate,
}) => {
  const [id, setId] = useState(producto.id);
  const [nombre, setNombre] = useState(producto.title);
  const [descripcion, setDescripcion] = useState(producto.description);
  const [precio, setPrecio] = useState(producto.price);
  const [imagen, setImagen] = useState(producto.image);
  const [prodContext, setProdContext] = useContext(ProductContext);
  


  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescripcion(event.target.value);
  };
  const handleImagenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagen(event.target.value);
  };

  const handlePrecioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrecio(Number(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // let isImagen = await isImgUrl(imagen);
    // onSubmit(id, nombre, descripcion, precio, imagen, setToggle);
    if(isUpdate){

      const indexToUpdate = prodContext.findIndex(obj => obj.id === id);
      
      if (indexToUpdate !== -1) {    
        const updatedObject: ProductoProps = {
          id: id,
          title: nombre,
          description: descripcion,
        price: precio,
        image: imagen,
      }
      const updatedArray = [
        ...prodContext.slice(0, indexToUpdate),
        updatedObject,
        ...prodContext.slice(indexToUpdate + 1)
      ];
      setProdContext(updatedArray);
    }
  }
  else{
    let newId = 1
    if (prodContext.length > 0) {
      const lastObject = prodContext[prodContext.length - 1];
      newId = lastObject.id + 1;
    } 
    const newObject: ProductoProps = {
      id: newId,
      title: nombre,
      description: descripcion,
      price: precio,
      image: imagen,
  }
  setProdContext([...prodContext,newObject]);

  }
   
       dismiss();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="formularioProducto"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        width: "700px",
        flexWrap: "wrap",
        height: "100%",
        padding: "0px 0px 0px 0px",
        borderColor: "red",
        margin: "0px 0px 2px 0px",
      }}
    >
      <div style={{ display: "block", width: "100%" }}>
        <div style={{ display: "flex", margin: "0px" }}>
          <div style={{ display: "block" }}>
            <TextField
              style={{ display: "block", margin: "10px 0px 10px 0px" }}
              label="Nombre"
              value={nombre}
              onChange={handleNombreChange}
              variant="outlined"
              required
            />
            <TextField
              style={{
                display: "block",
                margin: "10px 0px 10px 0px",
                textAlign: "right",
              }}
              label="Precio"
              value={precio}
              onChange={handlePrecioChange}
              variant="outlined"
              required
              inputProps={{ inputMode: "decimal"}}
            />
            <TextField
              style={{ display: "block", margin: "10px 0px 10px 0px" }}
              label="Imagen"
              value={imagen}
              required
              onChange={handleImagenChange}
              variant="outlined"
            />
          </div>
          <TextField
            style={{
              display: "block",
              margin: "10px 10px 10px 10px",
              width: "70%",
            }}
            label="Descripcion"
            value={descripcion}
            multiline={true}
            fullWidth
            required
            onChange={handleDescripcionChange}
            variant="outlined"
            minRows={4}
            sx={{
              width: { sm: 100, md: 300 },
              "& .MuiInputBase-root": {
                height: 150,
              },
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", width: "100%", margin: "10px 10px" }}>
        <Button
          style={{ marginRight: "10px" }}
          key="2"
          fullWidth
          size="large"
          text="Cancelar"
          variant="outlined"
          onClick={dismiss}
        />
        <Button
          style={{ marginLeft: "10px" }}
          key="1"
          fullWidth
          size="large"
          text="Guardar"
          variant="contained"
          type="submit"
        />
      </div>
    </form>
  );
};

export default ModificarProducto;
