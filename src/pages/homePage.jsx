import { Link } from "react-router-dom";
import MainLayout from "./mainLayout";
import H1 from "../common/components/text/h1";

const HomePage = () => {
  return (
    <MainLayout>
      <H1>Участники</H1>
      <br />
      <div className="flex gap-5 justify-center">
        <Link
          to="/1"
          className="flex items-center bg-white max-w-sm overflow-hidden rounded-lg shadow hover:drop-shadow-xl p-5"
        >
          <img
            className="w-36 h-36 rounded-full mr-4"
            src="/images/89993415.jpeg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none mb-5 text-lg">Нияз</p>
            <p className="text-gray-600">Frontend Development</p>
          </div>
        </Link>
        <Link
          to="/2"
          className="flex items-center bg-white max-w-sm rounded overflow-hidden shadow-md hover:drop-shadow-xl p-5"
        >
          <img
            className="w-36 h-36 rounded-full mr-4"
            src="/images/52581965.jpeg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none mb-5 text-lg">Андрей</p>
            <p className="text-gray-600">Frontend Development</p>
          </div>
        </Link>
        <Link
          to="/3"
          className="flex items-center bg-white max-w-sm rounded overflow-hidden shadow-md hover:drop-shadow-xl p-5"
        >
          <img
            className="w-36 h-36 rounded-full mr-4"
            src="/images/90685957.jpeg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none mb-5 text-lg">Алмаз</p>
            <p className="text-gray-600">Frontend Development</p>
          </div>
        </Link>
      </div>
    </MainLayout>
  );
};

export default HomePage;
