import React from "react";
import PropTypes from "prop-types";
import Border from "../contaner/border";
import Age from "../card/age";
import Name from "../card/name";
import Badge from "../badge";
import Info from "../card/info";
import SocialList from "../profile/socialsList";
import SkillsList from "../profile/skillsList";
import ImpactsList from "./impactsList";
import Slider from "../slider";
import Reviews from "../reviews";
import Icon from "../icon";

const Profile = (props) => {
  const { firstName, lastName, age, image, info } = props;
  const { impacts, socials, position, skills, portfolio, reviews } = props;

  function getRating() {
    const size = reviews.length;
    let sum = 0;
    reviews.forEach((r) => {
      sum += r.rating;
    });
    return sum / size;
  }

  return (
    <Border className="p-5">
      <div className="flex flex-col min-[480px]:flex-row">
        <img
          className="object-cover w-full rounded-lg h-96 min-[480px]:h-auto min-[480px]:w-40 sm:w-48"
          src={`/02-hackathon/images/${image}`}
          alt={`Фото ${firstName}`}
        />
        <div className="flex flex-col justify-between min-[480px]:justify-center pt-5 min-[480px]:pl-5 min-[480px]:pt-0">
          <Name firstName={firstName} lastName={lastName} position={position}>
            <Badge color={position.color} size="sm">
              {position.name}
            </Badge>
            <Badge color="green" size="sm">
              <div className="flex items-center gap-1">
                <Icon
                  name="star"
                  className="text-[#FFC602FF] w-[16px] h-[16px]"
                />
                <span>{getRating().toFixed(1)}</span>
              </div>
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
      <br />
      <Reviews reviews={reviews} />
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
  portfolio: PropTypes.array,
  reviews: PropTypes.array
};
export default Profile;
