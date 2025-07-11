import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlog, updateBlog } from "../api/blog";
import ErrorOutput from "../components/common/ErrorOutput";
import SuccessOutput from "../components/common/SuccessOutput";
import Spinner from "../components/common/Spinner";

const EditBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();
  const { blogId } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlog(blogId);
        const blog = response.data.blog;
        setFormData({
          title: blog.title,
          content: blog.content
        });
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError("");
    setSuccess("");

    try {
      await updateBlog(blogId, formData);
      setSuccess("Blog updated successfully!");
      
      // Redirect to blogs page after 2 seconds
      setTimeout(() => {
        navigate("/blogs");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update blog");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorOutput errorMessage={error} />;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
      
      {success && <SuccessOutput successMessage={success} />}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={200}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title..."
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            minLength={10}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content..."
          />
        </div>
        
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={updating}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {updating ? <Spinner /> : "Update Blog"}
          </button>
          
          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog; 