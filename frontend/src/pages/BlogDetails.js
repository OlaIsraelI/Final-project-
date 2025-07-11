import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../api/blog";
import ErrorOutput from "../components/common/ErrorOutput";
import Spinner from "../components/common/Spinner";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlog(blogId)
      .then(res => setBlog(res.data.blog))
      .catch(err => setError(err.response?.data?.error || "Failed to fetch blog"))
      .finally(() => setLoading(false));
  }, [blogId]);

  if (loading) return <Spinner />;
  if (error) return <ErrorOutput errorMessage={error} />;
  if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <p>{blog.content}</p>
      <p className="text-sm text-gray-500 mt-4">By {blog.user?.firstName} {blog.user?.lastName}</p>
    </div>
  );
};

export default BlogDetails;
