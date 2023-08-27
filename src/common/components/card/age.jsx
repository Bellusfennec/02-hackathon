const Age = (props) => {
  const { age } = props;

  return (
    <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-700">
      {age} лет
    </h3>
  );
};

export default Age;
