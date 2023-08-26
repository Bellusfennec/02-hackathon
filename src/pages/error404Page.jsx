import { Link } from "react-router-dom";
import MainLayout from "./mainLayout";

const Error404Page = () => {
  return (
    <MainLayout>
      <div className=" mx-auto">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center flex-col">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Страница не найдена!
            </h1>
            <p>
              <Link
                to="/"
                className="font-medium text-gray-600 hover:underline"
              >
                Назад
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Error404Page;
