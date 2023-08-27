import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import localStorageService from "../services/localStorage";

const FavoritesContext = React.createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function setFavoriteById(id) {
    if (getFavoriteById(id)) return;

    const newFavorites = favorites ? [...favorites, id] : [id];
    localStorageService.setFavorites(newFavorites);
    setFavorites(newFavorites);
  }
  function getFavoriteById(id) {
    return favorites ? favorites.find((f) => f === id) : false;
  }
  function removeFavoriteById(id) {
    const newFavorites = favorites.filter((f) => f !== id);

    if (newFavorites.length > 0) {
      localStorageService.setFavorites(newFavorites);
      setFavorites(newFavorites);
    } else {
      localStorageService.removeFavorites();
      setFavorites([]);
    }
  }

  useEffect(() => {
    setFavorites(localStorageService.getFavorites());
    setLoading(false);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoading,
        setFavoriteById,
        getFavoriteById,
        removeFavoriteById
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default FavoritesProvider;
