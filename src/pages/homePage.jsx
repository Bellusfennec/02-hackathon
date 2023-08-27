import MainLayout from "../layouts/mainLayout";
import H1 from "../common/components/h1";
import db from "../db";
import Card from "../common/components/card";

const HomePage = () => {
  const { partners } = db;
  return (
    <MainLayout>
      <H1>Участники</H1>
      <br />
      <div className="flex gap-5 justify-center">
        {partners.map(({ id, ...rest }) => (
          <Card key={id} id={id} {...rest} />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
