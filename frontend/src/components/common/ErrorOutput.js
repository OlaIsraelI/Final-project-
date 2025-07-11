import PropTypes from "prop-types";

const ErrorOutput = ({ errorMessage }) => (
  <div className="bg-red-100 text-red-800 p-2 rounded text-sm my-2">
    {errorMessage}
  </div>
);

ErrorOutput.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorOutput; 