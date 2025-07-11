import { useState } from "react";
import ErrorOutput from "../components/common/ErrorOutput";
import SuccessOutput from "../components/common/SuccessOutput";
// import { resetPassword } from "../api/user"; // Implement this in your API

const ResetPassword = () => {
  const [fields, setFields] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    if (fields.password !== fields.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // try {
    //   await resetPassword(fields);
    //   setSuccess("Password reset successful!");
    // } catch (err) {
    //   setError(err.response?.data?.error || "Reset failed");
    // }
    setSuccess("Password reset logic to be implemented.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Reset Password</h3>
      {error && <ErrorOutput errorMessage={error} />}
      {success && <SuccessOutput message={success} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} value={fields.email} />
        <input type="password" name="password" placeholder="New Password" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} value={fields.password} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} value={fields.confirmPassword} />
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword; 