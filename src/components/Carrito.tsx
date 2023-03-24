import { faCartShopping, IconName } from "@fortawesome/pro-regular-svg-icons";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  fa0,
  faS,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faS, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0);

interface CarritoProps {
  numeroCarrito: number;
}

export function Carrito({ numeroCarrito }: CarritoProps) {
  const numeroToArray = () => {
    let numero = numeroCarrito.toString();

    console.log(numero);
    if (numeroCarrito > 0) {
      let array: string[] = numero.split("");
      let resultado = array.map((letra) => {
        let iconName: IconName = letra as IconName;
        return <FontAwesomeIcon icon={["fas", iconName]} bounce />;
      });
      return resultado;
    }
  };
  const iconoCarrito = () => {
    if (numeroCarrito) {
      return <FontAwesomeIcon icon={faCartShopping} bounce />;
    } else {
      return <FontAwesomeIcon icon={faCartShopping} />;
    }
  };

  return (
    <div id="carrito">
      <div className="iconos">{iconoCarrito()}</div>
      <div
        className="iconos"
        style={{ marginLeft: "5px", marginRight: "20px" }}
      >
        {numeroToArray()}
      </div>
    </div>
  );
}
