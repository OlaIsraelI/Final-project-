import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import VerifyUser from "./pages/VerifyUser";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/get-started/login" />} />
        <Route path="/get-started" element={<AuthLayout />}>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-account" element={<VerifyUser />} />
        </Route>
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/create"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/edit/:blogId"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p className="text-center mt-20">404 - Page Not Found</p>} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
