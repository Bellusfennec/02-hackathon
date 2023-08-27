import Progress from "../progress";

const SkillsList = (props) => {
  const { skills } = props;
  return (
    <div className="flex justify-around gap-5">
      {skills.map(({ id, name, percent }) => (
        <Progress
          key={id}
          percent={percent}
          name={name}
          type="circle"
          size="sm"
          duration={2000}
        />
      ))}
    </div>
  );
};

export default SkillsList;
