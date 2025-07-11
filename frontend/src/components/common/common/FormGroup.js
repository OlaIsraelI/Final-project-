const FormGroup = ({ label, children }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    {children}
  </div>
);
export default FormGroup;
