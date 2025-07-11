import api from "./index";
export const createNews = (data) => api.post("/news", data);
export const getNews = (params) => api.get("/news", { params });
export const getNewsById = (id) => api.get(`/news/${id}`);
export const updateNews = (id, data) => api.put(`/news/${id}`, data);
export const deleteNews = (id) => api.delete(`/news/${id}`);
export const getLatestNews = (params) => api.get("/news/latest", { params });
export const getTrendingNews = (params) => api.get("/news/trending", { params });
export const getNewsByCategory = (category, params) => api.get(`/news/category/${category}`, { params });
