import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-lg p-8">
      {/* Optional: Add a logo or welcome message here */}
      <Outlet />
    </div>
  </div>
);

export default AuthLayout;
