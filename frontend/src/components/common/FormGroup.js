import PropTypes from "prop-types";

const FormGroup = ({ label, children, required = false }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
  </div>
);

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
};

export default FormGroup; 