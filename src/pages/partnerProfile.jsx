import MainLayout from "../layouts/mainLayout";
import db from "../db";
import { Navigate, useParams } from "react-router-dom";
import H1 from "../common/components/h1";
import Name from "../common/components/card/name";
import Age from "../common/components/card/age";
import Badge from "../common/components/badge";
import SocialList from "../common/components/card/socialsList";
import ImpactsList from "../common/components/card/impactsList";
import SkillsList from "../common/components/card/skillsList";
import Info from "../common/components/card/info";
import Border from "../common/components/contaner/border";

const PartnerProfile = () => {
  const { id } = useParams();
  const { partners } = db;
  const partner = partners.find((p) => p.id === Number(id));
  if (!partner) return <Navigate to="/" />;

  const { firstName, lastName, age, image, info } = partner;
  const { impacts, socials, position, skills } = partner;
  return (
    <MainLayout>
      <H1>Партнёр</H1>
      <br />
      <Border className="p-5">
        <div className="flex flex-col min-[480px]:flex-row">
          <img
            className="object-cover w-full rounded-lg h-96 min-[480px]:h-auto min-[480px]:w-40 sm:w-48"
            src={`/images/${image}`}
            alt={`Фото ${firstName}`}
          />
          <div className="flex flex-col justify-between min-[480px]:justify-center pt-5 min-[480px]:pl-5">
            <Name firstName={firstName} lastName={lastName} position={position}>
              <Badge color={position.color} size="sm">
                {position.name}
              </Badge>
            </Name>
            <Age age={age} />
            <Info info={info} />
            <SocialList socials={socials} />
          </div>
        </div>
        <br />
        <SkillsList skills={skills} />
        <br />
        <ImpactsList impacts={impacts} />
      </Border>
    </MainLayout>
  );
};
export default PartnerProfile;
