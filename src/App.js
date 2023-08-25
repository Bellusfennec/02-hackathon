import AppLoader from "./common/hoc/appLoader";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-300">
      <AppLoader>
        <AppRoutes />
      </AppLoader>
    </div>
  );
}

export default App;
