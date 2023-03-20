import axios from "axios";

function guardarProducto(
  nombre1: string,
  descripcion1: string,
  precio1: number,
  imagen1: string
) {
  console.log("por guardar los valores");
  console.log(nombre1, descripcion1, precio1, imagen1);
  axios
    .post("http://localhost:3000/productos", {
      nombre: nombre1,
      descripcion: descripcion1,
      precio: precio1,
      imagen: imagen1,
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default guardarProducto;
