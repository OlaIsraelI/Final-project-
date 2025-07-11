import { useState } from "react";
import { register } from "../api/user";
import ErrorOutput from "../components/common/ErrorOutput";
import SuccessOutput from "../components/common/SuccessOutput";

const SignUp = () => {
  const [fields, setFields] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
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
    try {
      await register(fields);
      setSuccess("Registration successful! Please check your email to verify your account.");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Sign Up</h3>
      {error && <ErrorOutput errorMessage={error} />}
      {success && <SuccessOutput message={success} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        {["firstName", "lastName", "email", "password", "confirmPassword"].map((field) => (
          <input
            key={field}
            name={field}
            type={field.includes("password") ? "password" : "text"}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
            value={fields[field]}
          />
        ))}
        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp; 