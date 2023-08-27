import MainLayout from "../layouts/mainLayout";
import H1 from "../common/components/h1";
import db from "../db";
import CardsList from "../common/components/cardsList";

const HomePage = () => {
  const { partners } = db;
  return (
    <MainLayout>
      <H1>Список партнёров</H1>
      <br />
      <CardsList items={partners} />
    </MainLayout>
  );
};

export default HomePage;
