import { Outlet } from "react-router-dom";
import Header from "components/Inputs/Header";
import Navbar from "components/navbar";

export default function Mobile() {
  return (
    <div>
      <Header />
      <Outlet />
      <Navbar />
    </div>
  );
}
