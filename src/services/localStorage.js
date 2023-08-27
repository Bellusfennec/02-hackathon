const FAVORITES_KEY = "favorites";

function setFavorites(item) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(item));
}
function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY));
}
function removeFavorites() {
  localStorage.removeItem(FAVORITES_KEY);
}

const localStorageService = {
  setFavorites,
  getFavorites,
  removeFavorites,
};
export default localStorageService;
