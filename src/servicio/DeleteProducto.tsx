import axios from "axios";
import { ProductContext } from "../App";
import { useContext } from "react";

async function deleteProducto(
  id: number,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
) {

  // // const products = prodContext.filter(x => x.id != id);
  // setProdContext(prodContext.filter(x => x.id != id));

  
  // await axios
  //   .delete("http://localhost:3000/productos/" + id)
  //   .then(function (response: any) {
  //     console.log(response);
  //     setToggle((prevState) => !prevState);
  //   })
  //   .catch(function (error: any) {
  //     console.log(error);
  //   });
}

export default deleteProducto;
