import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import VerifyUser from "./pages/VerifyUser";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import News from "./pages/News";
import FileManager from "./pages/FileManager";
import FileUpload from "./pages/FileUpload";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Navigation from "./components/Navigation";

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Auth routes */}
        <Route path="/get-started" element={<AuthLayout />}>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-account" element={<VerifyUser />} />
        </Route>

        {/* Protected routes with navigation */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <Dashboard />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <Profile />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <Blog />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/create"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <CreateBlog />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/:blogId"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <BlogDetails />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs/edit/:blogId"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <EditBlog />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <News />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/file-manager"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <FileManager />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/file-upload"
          element={
            <ProtectedRoute>
              <div>
                <Navigation />
                <FileUpload />
              </div>
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<p className="text-center mt-20">404 - Page Not Found</p>} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
