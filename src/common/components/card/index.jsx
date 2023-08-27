import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../../hooks/useFavorites";
import Badge from "../badge";
import Border from "../contaner/border";
import Age from "./age";
import Favorite from "./favorite";
import Info from "./info";
import Name from "./name";
import PropTypes from "prop-types";

const Card = (props) => {
  const { id, image, firstName, lastName, position, age, info } = props;
  const { setFavoriteById, getFavoriteById, removeFavoriteById } =
    useFavorites();
  const [isFavorite, setFavorite] = useState(false);

  const handlerSetFavorite = (id) => {
    setFavoriteById(id);
    setFavorite(true);
  };
  const handlerRemoveFavorite = (id) => {
    removeFavoriteById(id);
    setFavorite(false);
  };

  useEffect(() => {
    const favorite = getFavoriteById(id);
    if (favorite) setFavorite(favorite);
  }, []);
  console.log(isFavorite);

  return (
    <Border className="relative flex items-center p-5 w-full md:w-80 flex-col md:flex-col sm:flex-row hover:drop-shadow-xl">
      <Link to={`/${id}`} className="flex">
        <img
          className="w-32 h-32 rounded-full mr-4"
          src={`/images/${image}`}
          alt={`Фото ${firstName}`}
        />
      </Link>
      <div className="pt-5 self-start">
        <Badge color={position.color} size="sm">
          {position.name}
        </Badge>
        <Link to={`/${id}`}>
          <Name firstName={firstName} lastName={lastName} />
        </Link>
        <Age age={age} />
        <Info info={info} />
      </div>
      <Favorite
        onSet={handlerSetFavorite}
        onRemove={handlerRemoveFavorite}
        isFavorite={isFavorite}
        id={id}
      />
    </Border>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.object,
  age: PropTypes.number,
  info: PropTypes.string
};
export default Card;
