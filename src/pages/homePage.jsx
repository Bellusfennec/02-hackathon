import { Link } from "react-router-dom";
import MainLayout from "./mainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <Link to="/user1">Нияз</Link>
      <br />
      <Link to="/user2">Андрей</Link>
      <br />
      <Link to="/user3">Алмаз</Link>
    </MainLayout>
  );
};

export default HomePage;
