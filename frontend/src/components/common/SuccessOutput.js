import PropTypes from "prop-types";

const SuccessOutput = ({ successMessage }) => (
  <div className="bg-green-100 text-green-800 p-2 rounded text-sm my-2">
    {successMessage}
  </div>
);

SuccessOutput.propTypes = {
  successMessage: PropTypes.string.isRequired,
};

export default SuccessOutput; 