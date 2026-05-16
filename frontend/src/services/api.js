import axios from "axios";

const backend = import.meta.env.VITE_BACKEND;

const api = axios.create({
  baseURL: `${backend}`,
});

export default api;
