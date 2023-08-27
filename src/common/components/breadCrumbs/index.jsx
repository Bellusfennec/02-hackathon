import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const pathName = {
    home: "Главная страница",
    favorites: "Избранное",
    id: "Партнёр"
  };
  const initialCrumbs = ["home"];

  const location = useLocation();
  const crumbsCrop = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");
  const crumbs = initialCrumbs.concat(crumbsCrop);
  const currentLink = [];

  function isLast(index) {
    return index === crumbs.length - 1;
  }

  return (
    <nav className="block py-3 [&>*]:inline-block ">
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
                className="underline-offset-3 mr-1 text-gray-600 hover:underline text-sm"
              >
                {pathName[crumb]}
              </Link>
            ) : (
              <p className="mx-1 text-sm">{pathName[crumb] || pathName.id}</p>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
