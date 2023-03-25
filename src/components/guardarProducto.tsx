import axios from "axios";

async function guardarProducto(
  id: number,
  nombre: string,
  descripcion: string,
  precio: number,
  imagen: string,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
) {
  console.log("por guardar los valores");
  console.log(id, nombre, descripcion, precio, imagen);

  await axios
    .post("http://localhost:3000/productos", {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen,
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default guardarProducto;
