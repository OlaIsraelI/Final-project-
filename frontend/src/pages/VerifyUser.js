import { useState } from "react";
import { verify } from "../api/user";
import ErrorOutput from "../components/common/ErrorOutput";
import SuccessOutput from "../components/common/SuccessOutput";

const VerifyUser = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      await verify({ verificationToken: code });
      setSuccess("Account verified! You can now sign in.");
    } catch (err) {
      setError(err.response?.data?.error || "Verification failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Verify Account</h3>
      {error && <ErrorOutput errorMessage={error} />}
      {success && <SuccessOutput message={success} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Verification Code"
          className="w-full px-4 py-2 border rounded-md"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyUser; 