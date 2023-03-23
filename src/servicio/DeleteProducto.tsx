import axios from "axios";

function deleteProducto(id: number) {
  axios
    .delete("http://localhost:3000/productos/" + id)
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default deleteProducto;
