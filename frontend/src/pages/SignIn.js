import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../lib/APIs/authAPIs";
import ErrorOutput from "../components/common/ErrorOutput";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isSuccess, isError, error, isLoading, data }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("refreshToken", data?.refreshToken);
      navigate("/");
    }
  }, [isSuccess, data, navigate]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Sign In</h3>
      {isError && <ErrorOutput errorMessage={error?.data?.error || "Login failed"} />}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <div className="flex justify-between text-sm mt-6">
        <Link to="/get-started/signup" className="text-blue-500">Sign Up</Link>
        <Link to="/get-started/reset-password" className="text-blue-500">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default SignIn; 