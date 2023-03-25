import axios from "axios";

async function putProducto(
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
    .put("http://localhost:3000/productos/" + id, {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen,
    })
    .then(function (response: any) {
      setToggle((prevState) => !prevState);

      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default putProducto;
