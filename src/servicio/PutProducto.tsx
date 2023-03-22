import axios from "axios";

function putProducto(
  id: number,
  nombre: string,
  descripcion: string,
  precio: number,
  imagen: string
) {
  console.log("por guardar los valores");
  console.log(id, nombre, descripcion, precio, imagen);
  axios
    .put("http://localhost:3000/productos/" + id, {
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

export default putProducto;
