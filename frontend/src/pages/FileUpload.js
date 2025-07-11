import { useState } from "react";
import { uploadFile } from "../api/file";
import ErrorOutput from "../components/common/ErrorOutput";
import SuccessOutput from "../components/common/SuccessOutput";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    if (!file) {
      setError("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      await uploadFile(formData);
      setSuccess("File uploaded successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Upload File</h3>
      {error && <ErrorOutput errorMessage={error} />}
      {success && <SuccessOutput message={success} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={handleChange} className="w-full" />
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
