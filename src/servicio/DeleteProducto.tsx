import axios from "axios";

async function deleteProducto(
  id: number,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
) {
  await axios
    .delete("http://localhost:3000/productos/" + id)
    .then(function (response: any) {
      console.log(response);
      setToggle((prevState) => !prevState);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default deleteProducto;
