import { Sidebar } from "@architecture-it/stylesystem";
import { Header } from "@architecture-it/stylesystem/Header";
import { faHome } from "@fortawesome/pro-light-svg-icons";
import { faCartShopping } from "@fortawesome/pro-regular-svg-icons";
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
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

interface RootLayoutProps {
  toggle: () => void;
  numeroCarrito: number;
}
export default function RootLayout({ toggle, numeroCarrito }: RootLayoutProps) {
  const numero = () => {
    let simbolos: any[];
    if (numeroCarrito >= 0) {
      return numeroCarrito.toString();
    }
  };

  return (
    <>
      <header>
        <Header onClickButton={toggle}>
          <div style={{ marginRight: "20px" }}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          {numero()}
        </Header>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
