import ProductoTarjeta from "./ProductoTarjeta";

import React, { useEffect, useState } from "react";

interface ModificarProductoProps {
  onSubmit: (
    id: number,
    nombre: string,
    descripcion: string,
    number: number,
    imagen: string
  ) => void;
  idProducto: number;
  dismiss: () => void;
}

const ModificarProducto: React.FC<ModificarProductoProps> = ({
  onSubmit,
  idProducto,
  dismiss,
}) => {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("mostrando dismiss");
    console.log(dismiss);

    setId(idProducto);
    dismiss();
    onSubmit(idProducto, nombre, descripcion, precio, imagen);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Descripcion:
        <input
          type="text"
          value={descripcion}
          onChange={handleDescripcionChange}
        />
      </label>
      <label>
        Precio:
        <input type="number" value={precio} onChange={handlePrecioChange} />
      </label>
      <label>
        Imagen:
        <input type="text" value={imagen} onChange={handleImagenChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModificarProducto;
