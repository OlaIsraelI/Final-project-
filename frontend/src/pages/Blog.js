import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, deleteBlog } from "../api/blog";
import ErrorOutput from "../components/common/ErrorOutput";
import Spinner from "../components/common/Spinner";
import SuccessOutput from "../components/common/SuccessOutput";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const fetchBlogs = () => {
    getBlogs()
      .then(res => setBlogs(res.data.blogs))
      .catch(err => setError(err.response?.data?.error || "Failed to fetch blogs"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    setDeleting(true);
    setError("");
    setSuccess("");

    try {
      await deleteBlog(blogId);
      setSuccess("Blog deleted successfully!");
      fetchBlogs(); // Refresh the list
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete blog");
    } finally {
      setDeleting(false);
    }
  };

  const handleEdit = (blogId) => {
    navigate(`/blogs/edit/${blogId}`);
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorOutput errorMessage={error} />;
  if (success) return <SuccessOutput successMessage={success} />;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <button
          onClick={() => navigate("/blogs/create")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create New Blog
        </button>
      </div>
      
      {error && <ErrorOutput errorMessage={error} />}
      {success && <SuccessOutput successMessage={success} />}
      
      <div className="grid gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(blog._id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  disabled={deleting}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{blog.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>By {blog.user?.firstName} {blog.user?.lastName}</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
