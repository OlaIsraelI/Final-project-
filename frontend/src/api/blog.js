import api from "./index";
export const createBlog = (data) => api.post("/blogs", data);
export const getBlogs = (params) => api.get("/blogs", { params });
export const getBlog = (id) => api.get(`/blogs/${id}`);
export const updateBlog = (id, data) => api.put(`/blogs/${id}`, data);
export const deleteBlog = (id) => api.delete(`/blogs/${id}`);
