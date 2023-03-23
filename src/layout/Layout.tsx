import { Sidebar } from "@architecture-it/stylesystem";
import { Header } from "@architecture-it/stylesystem/Header";
import { NavLink, Outlet } from "react-router-dom";

interface RootLayoutProps {
  toggle: () => void;
}
export default function RootLayout({ toggle }: RootLayoutProps) {
  return (
    <>
      <header>
        <Header onClickButton={toggle}>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="nuevo">NuevoProducto</NavLink>
            <NavLink to="administrar">Administrar</NavLink>
          </nav>
        </Header>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
