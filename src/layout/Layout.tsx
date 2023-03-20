import { Header } from "@architecture-it/stylesystem/Header";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Header onClickButton={() => {}}>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="nuevo">NuevoProducto</NavLink>
            <NavLink to="administrar">Administrar</NavLink>
          </nav>
        </Header>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
