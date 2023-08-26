import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, image, firstName, lastName, position } = props;
  return (
    <Link
      to={`/${id}`}
      className="w-80 flex items-center bg-white max-w-sm overflow-hidden rounded-lg shadow hover:drop-shadow-xl p-5"
    >
      <img
        className="w-32 h-32 rounded-full mr-4"
        src={`/images/${image}`}
        alt={`Фото ${firstName}`}
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none mb-5 text-lg">
          {firstName} {lastName}
        </p>
        <p className="text-gray-600">{position}</p>
      </div>
    </Link>
  );
};

export default Card;
