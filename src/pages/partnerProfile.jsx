import MainLayout from "../layouts/mainLayout";
import Progress from "../common/components/progress";
import db from "../db";
import { Link, Navigate, useParams } from "react-router-dom";
import H1 from "../common/components/h1";

const PartnerProfile = () => {
  const { id } = useParams();
  const { partners } = db;
  const partner = partners.find((p) => p.id === Number(id));
  if (!partner) return <Navigate to="/" />;
  const { firstName, lastName, age, image, info, impacts, socials } = partner;
  return (
    <MainLayout>
      <H1>Участник</H1>
      <br />
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
        <img
          className="self-start object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-tl-lg md:rounded-br-lg"
          src={`/images/${image}`}
          alt={`Фото ${firstName}`}
        />
        <div className="flex flex-col justify-between p-5 leading-normal">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {firstName} {lastName}
          </h2>
          <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-700">
            {age} лет
          </h3>
          <p className="mb-3 font-normal text-gray-700">{info}</p>
          <div className="flex gap-5">
            {socials.map(({ id, name, link }) => (
              <Link key={id} to={link}>
                {name}
              </Link>
            ))}
          </div>
          <br />
          <p>Реализовал в данном проекте:</p>
          <ul className="list-disc">
            {impacts.map(({ id, name }) => (
              <li key={id} className="ml-5">
                {name}
              </li>
            ))}
          </ul>
          <br />
          <div className="flex justify-around gap-5">
            {partner.skills.map(({ id, name, percent }) => (
              <Progress
                key={id}
                percent={percent}
                name={name}
                type="circle"
                size="sm"
                duration={2000}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default PartnerProfile;
