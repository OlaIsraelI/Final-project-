import PropTypes from "prop-types";

const FormInput = ({ type = "text", name, value, onChange, placeholder, ...props }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border rounded-md"
    {...props}
  />
);

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default FormInput; 