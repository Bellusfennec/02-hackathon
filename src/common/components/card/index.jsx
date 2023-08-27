import { Link } from "react-router-dom";
import Button from "../button";
import { useState } from "react";
import { useFavorites } from "../../../hooks/useFavorites";

const Card = (props) => {
  const { id, image, firstName, lastName, position } = props;
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
    <div className="w-80 flex items-center bg-white max-w-sm overflow-hidden rounded-lg shadow hover:drop-shadow-xl p-5">
      <Link to={`/${id}`}>
        <img
          className="w-32 h-32 rounded-full mr-4"
          src={`/images/${image}`}
          alt={`Фото ${firstName}`}
        />
      </Link>
      <div className="text-sm">
        <p className="text-gray-900 leading-none mb-5 text-lg">
          <Link to={`/${id}`}>
            {firstName} {lastName}
          </Link>
        </p>
        <p className="text-gray-600">{position}</p>
        <br />
        {isFavorite ? (
          <Button type="button" onClick={() => handlerRemoveFavorite(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
              />
            </svg>
          </Button>
        ) : (
          <Button type="button" onClick={() => handlerSetFavorite(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
