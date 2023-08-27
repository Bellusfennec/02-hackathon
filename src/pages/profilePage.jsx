import React from "react";
import { Navigate, useParams } from "react-router-dom";

import H1 from "../common/components/h1";
import db from "../db";
import MainLayout from "../layouts/mainLayout";
import Profile from "../common/components/card/profile";

const ProfilePage = () => {
  const { id } = useParams();
  const { partners } = db;
  const partner = partners.find((p) => p.id === Number(id));
  if (!partner) return <Navigate to="/" />;

  return (
    <MainLayout>
      <H1>Партнёр</H1>
      <br />
      <Profile {...partner} />
    </MainLayout>
  );
};
export default ProfilePage;
