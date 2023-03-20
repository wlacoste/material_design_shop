import ProductoTarjeta from "./ProductoTarjeta";

import React, { useState } from "react";

interface NuevoProductoProps {
  onSubmit: (
    nombre: string,
    descripcion: string,
    number: number,
    imagen: string
  ) => void;
}

const NuevoProducto: React.FC<NuevoProductoProps> = ({ onSubmit }) => {
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
    onSubmit(nombre, descripcion, precio, imagen);
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

export default NuevoProducto;
