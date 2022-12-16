import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AuthTemplate() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col min-h-screen h-full bg-yellow-100 md:py-5 px-5 py-8">
      <NavLink className="md:absolute md:top-4 md:left-4 mb-8 md:mb-0" to="/admin/dashboard">
        <img alt="logo" width={180} src="images/logo/logo.png" />
      </NavLink>
      <Outlet />
    </div>
  );
}
