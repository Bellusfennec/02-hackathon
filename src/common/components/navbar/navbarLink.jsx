import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  const { children, to, className } = props;

  return (
    <Link
      to={to}
      className={
        "inline-block p-5 font-medium text-gray-600 hover:bg-gray-50" +
        (className ? " " + className : "")
      }
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
