import { StyleSystemProvider } from "@architecture-it/stylesystem";
import { Link } from "react-router-dom";

interface LinkToggleSidebar {
  link: string;
  valor: string;
  toggle: () => void;
}

export function LinkToggleSidebar({ link, valor, toggle }: LinkToggleSidebar) {
  return (
    <StyleSystemProvider>
      <Link className="linkhover" to={link} onClick={toggle}>
        {valor}
      </Link>
    </StyleSystemProvider>
  );
}
