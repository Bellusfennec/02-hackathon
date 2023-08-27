import Card from "../card";

const CardsList = (props) => {
  const { items } = props;

  return (
    <div className="flex gap-5 flex-col md:flex-row">
      {items.map(({ id, ...rest }) => (
        <Card key={id} id={id} {...rest} />
      ))}
    </div>
  );
};

export default CardsList;
