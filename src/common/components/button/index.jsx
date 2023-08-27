const Button = (props) => {
  const { children, onClick } = props;
  const type = props.type ? props.type : "submit";
  return (
    <button
      onClick={onClick}
      type={type}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      {children}
    </button>
  );
};

export default Button;
