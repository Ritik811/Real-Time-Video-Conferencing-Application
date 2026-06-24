import { Outlet } from "react-router-dom";
import { Navbar } from "./Header.jsx";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
