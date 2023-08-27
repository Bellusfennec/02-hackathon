import { Link } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../../../hooks/useFavorites";
import Badge from "../badge";
import Name from "./name";
import Age from "./age";
import Info from "./info";
import Favorite from "./favorite";
import Border from "../contaner/border";

const Card = (props) => {
  const { id, image, firstName, lastName, position, age, info } = props;
  const { setFavoriteById, getFavoriteById, removeFavoriteById } =
    useFavorites();
  const [isFavorite, setFavorite] = useState(getFavoriteById(id));

  const handlerSetFavorite = (id) => {
    setFavoriteById(id);
    setFavorite(true);
  };
  const handlerRemoveFavorite = (id) => {
    removeFavoriteById(id);
    setFavorite(false);
  };

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

export default Card;
