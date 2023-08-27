const Badge = (props) => {
  const { children, className } = props;
  const color = props.color ? props.color : "blue";
  const size = props.size ? props.size : "xs";

  return (
    <span
      className={
        `bg-${color}-100 text-${color}-800 text-${size} font-medium mr-2 px-2.5 py-0.5 rounded whitespace-nowrap` +
        (className ? " " + className : "")
      }
    >
      {children}
    </span>
  );
};

export default Badge;
