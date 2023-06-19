import { Button } from "@architecture-it/stylesystem";
import React from "react";

interface EliminarProductoProps {
  onSubmit: (
    id: number,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  idProducto: number;
  dismiss: () => void;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const EliminarProducto: React.FC<EliminarProductoProps> = ({
  onSubmit,
  idProducto,
  dismiss,
  setToggle,
}) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(dismiss);
    console.log("eliminando producto " + idProducto);
    onSubmit(idProducto, setToggle);
    setToggle((prevState) => !prevState);
    dismiss();
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
