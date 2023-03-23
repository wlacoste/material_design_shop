import React, { MouseEventHandler } from "react";

interface EliminarProductoProps {
  onSubmit: (id: number) => void;
  idProducto: number;
  dismiss: () => void;
}

const EliminarProducto: React.FC<EliminarProductoProps> = ({
  onSubmit,
  idProducto,
  dismiss,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dismiss();
    console.log("eliminando producto " + idProducto);
    onSubmit(idProducto);
  };
  return <button onClick={handleSubmit}> Submit</button>;
};

export default EliminarProducto;
