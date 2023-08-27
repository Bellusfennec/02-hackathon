import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const pathName = { favorites: "Партнер", id: "Избранное" };
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  if (crumbs.length === 0) return;
  const currentLink = [];

  function isLast(index) {
    return index === crumbs.length - 1;
  }

  return (
    <nav className="block bg-indigo-100 py-2 px-1 my-1 [&>*]:inline-block">
      {crumbs.map((crumb, index) => {
        const disabled = isLast(index) ? "hover:" : "";
        currentLink.push(`/${crumb}`);

        return (
          <div
            key={crumb + "_" + index}
            className="after:content-['>'] last:after:hidden"
          >
            {!disabled ? (
              <Link
                to={currentLink.join("")}
                className="hover:underline underline-offset-2 mx-1 text-orange-600 decoration-blue-500"
              >
                {pathName[crumb]}
              </Link>
            ) : (
              <p className="text-orange-300 mx-1">{pathName[crumb]}</p>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
