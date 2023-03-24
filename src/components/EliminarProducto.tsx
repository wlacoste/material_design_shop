import { Button } from "@architecture-it/stylesystem";
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
    console.log(dismiss);
    dismiss();
    console.log("eliminando producto " + idProducto);
    onSubmit(idProducto);
  };
  return (
    <>
      <div style={{ display: "flex", width: "100%", margin: "0px 0px" }}>
        <Button
          style={{ marginRight: "10px" }}
          fullWidth
          size="large"
          text="Cancelar"
          variant="outlined"
          onClick={dismiss}
        />
        <Button
          style={{ marginLeft: "10px" }}
          fullWidth
          size="large"
          text="Eliminar"
          variant="contained"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default EliminarProducto;
