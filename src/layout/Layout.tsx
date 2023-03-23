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
        <Header onClickButton={toggle}></Header>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
