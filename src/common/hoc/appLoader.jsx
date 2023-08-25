/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { Loading } from "../components/loading";

const AppLoader = ({ children }) => {
  const isLoading = false;

  if (isLoading) {
    return <Loading />;
  }

  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppLoader;
