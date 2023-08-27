import React from "react";
import NavbarLink from "./navbarLink";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 sm:px-0">
      <div>
        <NavbarLink to="/" className="font-bold text-xl">
          Hackathon 2
        </NavbarLink>
      </div>
      <div className="flex">
        <NavbarLink to="/favorites">Избранное</NavbarLink>
      </div>
    </nav>
  );
};

export default Navbar;
