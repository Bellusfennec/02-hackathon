import Progress from "../progress";
import React from "react";
import PropTypes from "prop-types";

const SkillsList = (props) => {
  const { skills } = props;
  return (
    <div className="flex justify-around gap-5">
      {skills.map(({ id, name, percent, darkColor, lightColor }) => (
        <Progress
          key={id}
          percent={percent}
          name={name}
          type="circle"
          size="sm"
          duration={2000}
          color={lightColor}
          colorFill={darkColor}
        />
      ))}
    </div>
  );
};
SkillsList.propTypes = {
  skills: PropTypes.array
};
export default SkillsList;
