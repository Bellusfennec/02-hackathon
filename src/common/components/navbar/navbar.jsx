import NavbarLink from "./navbarLink";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <NavbarLink to="/">Hackathon 2</NavbarLink>
      </div>
      <div className="flex">
        <NavbarLink to="/favorites">Избранное</NavbarLink>
      </div>
    </nav>
  );
};

export default Navbar;
