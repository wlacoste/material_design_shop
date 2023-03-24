import axios from "axios";

function guardarProducto(
  id: number,
  nombre: string,
  descripcion: string,
  precio: number,
  imagen: string
) {
  console.log("por guardar los valores");
  axios
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
