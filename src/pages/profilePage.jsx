import React from "react";
import { Navigate, useParams } from "react-router-dom";
import H1 from "../common/components/h1";
import db from "../db";
import MainLayout from "../layouts/mainLayout";
import Profile from "../common/components/profile";
import Pagination from "../common/components/profile/pagination";

const ProfilePage = () => {
  const { id } = useParams();
  const { partners } = db;
  const partner = getPartnerById(id);
  if (!partner) return <Navigate to="/" />;

  function getPartnerById(id) {
    return partners.find((p) => p.id === Number(id));
  }

  return (
    <MainLayout>
      <H1>Профиль партнёра</H1>
      <br />
      <Profile {...partner} />
      <Pagination
        prev={getPartnerById(Number(id) - 1)}
        next={getPartnerById(Number(id) + 1)}
      />
    </MainLayout>
  );
};
export default ProfilePage;
