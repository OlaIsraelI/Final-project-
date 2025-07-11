import PropTypes from "prop-types";
const ErrorOutput = ({ errorMessage }) => (
  <div>{errorMessage}</div>
);
ErrorOutput.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default ErrorOutput;

