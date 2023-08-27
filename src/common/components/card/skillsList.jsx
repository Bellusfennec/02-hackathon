import Progress from "../progress";
import React from "react";
import PropTypes from "prop-types";

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
SkillsList.propTypes = {
  skills: PropTypes.array
};
export default SkillsList;
