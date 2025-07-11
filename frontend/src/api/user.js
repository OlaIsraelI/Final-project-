// src/api/user.js
import api from "./index";

export const fetchUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await api.post("/users", userData);
  return response.data;
};

export const register = (data) => api.post("/auth/register", data);
export const verify = (data) => api.put("/user/verify", data);
