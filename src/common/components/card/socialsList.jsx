import { Link } from "react-router-dom";

const SocialList = (props) => {
  const { socials } = props;

  return (
    <div className="flex gap-5">
      {socials.map(({ id, name, link }) => (
        <Link key={id} to={link}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
