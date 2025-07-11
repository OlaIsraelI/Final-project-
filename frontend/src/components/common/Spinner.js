import PropTypes from "prop-types";

const Spinner = ({ size = "8" }) => (
  <div className="flex justify-center items-center">
    <div className={`animate-spin rounded-full h-${size} w-${size} border-b-2 border-gray-900`}></div>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

export default Spinner; 