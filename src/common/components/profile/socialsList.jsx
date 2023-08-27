import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const SocialList = (props) => {
  const { socials } = props;

  return (
    <div className="flex gap-5">
      {socials.map(({ id, name, link }) => (
        <Link key={id} to={link}>
          {name}
        </Link>
      ))}
    </div>
  );
};
SocialList.propTypes = {
  socials: PropTypes.array
};
export default SocialList;
