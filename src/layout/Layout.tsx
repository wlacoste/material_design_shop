import { Sidebar } from "@architecture-it/stylesystem";
import { Header } from "@architecture-it/stylesystem/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, IconName } from "@fortawesome/pro-light-svg-icons";
import { faCartShopping } from "@fortawesome/pro-regular-svg-icons";
import x from "./../assets/ShopMeNow.svg";
import {
  faB,
  faCheckSquare,
  faCoffee,
  faDatabase,
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
  faWindowMaximize,
  faUserCircle,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

library.add(faS, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0);
interface RootLayoutProps {
  toggle: () => void;
}
export default function RootLayout({ toggle }: RootLayoutProps) {
  return (
    <>
      <header>
        <Header logo={{ alt: 'ShopMeNow', src: x }} onClickButton={toggle}>
        
      </Header>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
