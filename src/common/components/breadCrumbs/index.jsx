import React from "react";
import { useLocation } from "react-router-dom";
import NavbarLink from "../navbar/navbarLink";
const BreadCrumbs = () => {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

      return (
        <div key={crumb} className="after:content-['>'] last:after:hidden">
          <NavbarLink to={currentLink.join("")}>{crumb}</NavbarLink>
        </div>
      );
    });

  return <div className="[&>*]:inline-block">{crumbs}</div>;
};

export default BreadCrumbs;
