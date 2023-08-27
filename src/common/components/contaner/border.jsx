const Border = (props) => {
  const { children, className } = props;
  return (
    <div
      className={
        "bg-white overflow-hidden rounded-lg shadow" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
};

export default Border;
