import { Link } from "react-router-dom";

const NavbarLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="inline-block p-2 font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-500 "
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
