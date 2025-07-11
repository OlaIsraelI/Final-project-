import { useEffect, useState } from "react";
import { getNews } from "../api/news";
import ErrorOutput from "../components/common/ErrorOutput";
import Spinner from "../components/common/Spinner";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then(res => setNews(res.data.news))
      .catch(err => setError(err.response?.data?.error || "Failed to fetch news"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorOutput errorMessage={error} />;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">News</h2>
      <ul>
        {news.map(item => (
          <li key={item._id} className="mb-4 p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p>{item.summary}</p>
            <p className="text-sm text-gray-500">{item.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
