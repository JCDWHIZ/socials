import { Outlet } from "react-router-dom";
import Header from "components/Inputs/Header";

export default function Mobile() {
  return (
    <div>
      <Header />
      Mobile <Outlet />
    </div>
  );
}
