import Card from "../common/components/card";
import H1 from "../common/components/h1";
import db from "../db";
import { useFavorites } from "../hooks/useFavorites";
import MainLayout from "../layouts/mainLayout";

const FavoritesPage = () => {
  const { partners } = db;
  const { favorites } = useFavorites();

  const fav = favorites?.map((f) => partners.find((p) => p.id === f));

  return (
    <MainLayout>
      <H1>Избранное</H1>
      <br />
      <div className="flex gap-5 justify-center">
        {fav?.map(({ id, ...rest }) => (
          <Card key={id} id={id} {...rest} />
        ))}
      </div>
    </MainLayout>
  );
};

export default FavoritesPage;
