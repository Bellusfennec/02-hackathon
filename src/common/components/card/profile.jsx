import React from "react";
import PropTypes from "prop-types";
import Border from "../contaner/border";
import Age from "./age";
import Name from "./name";
import Badge from "../badge";
import Info from "./info";
import SocialList from "./socialsList";
import SkillsList from "./skillsList";
import ImpactsList from "./impactsList";
import Slider from "../slider";

const Profile = (props) => {
  const { firstName, lastName, age, image, info } = props;
  const { impacts, socials, position, skills, portfolio } = props;
  return (
    <Border className="p-5">
      <div className="flex flex-col min-[480px]:flex-row">
        <img
          className="object-cover w-full rounded-lg h-96 min-[480px]:h-auto min-[480px]:w-40 sm:w-48"
          src={`/images/${image}`}
          alt={`Фото ${firstName}`}
        />
        <div className="flex flex-col justify-between min-[480px]:justify-center pt-5 min-[480px]:pl-5 min-[480px]:pt-0">
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
      <Slider images={portfolio} duration={220} />
      <br />
      <ImpactsList impacts={impacts} />
    </Border>
  );
};
Profile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  image: PropTypes.string,
  info: PropTypes.string,
  impacts: PropTypes.array,
  socials: PropTypes.array,
  position: PropTypes.object,
  skills: PropTypes.array,
  portfolio: PropTypes.array
};
export default Profile;
