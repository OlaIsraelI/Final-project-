import api from "./index";
export const uploadFile = (formData) => api.post("/files/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" }
});
export const downloadFile = (fileId) => api.get(`/files/download/${fileId}`, { responseType: "blob" });
export const deleteFile = (fileId) => api.delete(`/files/delete/${fileId}`);
export const getFiles = (params) => api.get("/files", { params });
export const getFile = (fileId) => api.get(`/files/${fileId}`);
export const replaceFile = (fileId, formData) => api.put(`/files/replace/${fileId}`, formData, {
  headers: { "Content-Type": "multipart/form-data" }
}); 