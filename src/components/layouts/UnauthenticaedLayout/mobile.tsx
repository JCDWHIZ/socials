import React from "react";
import { Outlet } from "react-router-dom";

function MobileUnAuthenticatedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MobileUnAuthenticatedLayout;
