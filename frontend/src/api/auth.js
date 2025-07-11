import api from "./index";
export const signIn = (data) => api.post("/auth/login", data);
export const signOut = () => api.get("/auth/logout");
export const refreshToken = () => api.get("/auth/token");
