import CardsList from "../common/components/cardsList";
import H1 from "../common/components/h1";
import db from "../db";
import { useFavorites } from "../hooks/useFavorites";
import MainLayout from "../layouts/mainLayout";
import React from "react";

const FavoritesPage = () => {
  const { partners } = db;
  const { favorites } = useFavorites();

  // Найти данные по id избранных в БД
  const fullFavorites = favorites?.map((f) => partners.find((p) => p.id === f));

  return (
    <MainLayout>
      <H1>Избранное</H1>
      <br />
      {fullFavorites?.length > 0 ? (
        <CardsList items={fullFavorites} />
      ) : (
        <p>Ничего нет.</p>
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
