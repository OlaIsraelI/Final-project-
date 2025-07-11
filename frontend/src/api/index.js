// src/api/index.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  res => res,
  async error => {
    if (error.response?.status === 401) {
      // Optionally refresh token here
      // await api.get("/auth/token");
      // Retry original request
    }
    return Promise.reject(error);
  }
);

export default api;
