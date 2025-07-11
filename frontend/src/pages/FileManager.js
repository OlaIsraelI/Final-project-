import { useEffect, useState } from "react";
import { getFiles, downloadFile, deleteFile } from "../api/file";
import ErrorOutput from "../components/common/ErrorOutput";
import SuccessOutput from "../components/common/SuccessOutput";
import Spinner from "../components/common/Spinner";

const FileManager = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFiles()
      .then(res => setFiles(res.data.files))
      .catch(err => setError(err.response?.data?.error || "Failed to fetch files"))
      .finally(() => setLoading(false));
  }, []);

  const handleDownload = async (fileId, fileName) => {
    try {
      const res = await downloadFile(fileId);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError("Download failed");
    }
  };

  const handleDelete = async (fileId) => {
    try {
      await deleteFile(fileId);
      setFiles(files.filter(f => f._id !== fileId));
      setSuccess("File deleted successfully!");
    } catch (err) {
      setError("Delete failed");
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorOutput errorMessage={error} />;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Files</h2>
      {success && <SuccessOutput message={success} />}
      <ul>
        {files.map(file => (
          <li key={file._id} className="mb-4 p-4 bg-white rounded shadow flex justify-between items-center">
            <span>{file.fileName}</span>
            <div>
              <button onClick={() => handleDownload(file._id, file.fileName)} className="mr-2 text-blue-600">Download</button>
              <button onClick={() => handleDelete(file._id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManager;
