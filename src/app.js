import AppLoader from "./common/hoc/appLoader";
import FavoritesProvider from "./hooks/useFavorites";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="bg-gray-50">
      <FavoritesProvider>
        <AppLoader>
          <AppRoutes />
        </AppLoader>
      </FavoritesProvider>
    </div>
  );
}

export default App;
