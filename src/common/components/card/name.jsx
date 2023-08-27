const Name = (props) => {
  const { firstName, lastName, children } = props;
  return (
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-5">
      {firstName} {lastName} {children}
    </h2>
  );
};

export default Name;
