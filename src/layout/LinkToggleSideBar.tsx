import { Link } from "react-router-dom";

interface LinkToggleSidebar {
  link: string;
  valor: string;
  toggle: () => void;
}

export function LinkToggleSidebar({ link, valor, toggle }: LinkToggleSidebar) {
  return (
    <Link to={link} onClick={toggle}>
      {valor}
    </Link>
  );
}
