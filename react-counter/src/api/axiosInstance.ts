// src/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// 🔹 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request:", config.method?.toUpperCase(), config.url);
    // Example: attach token
    config.headers.Authorization = "Bearer demo-token";
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 🔹 Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Response Error:", error.response?.status);
    return Promise.reject(error);
  }
);

// 🔹 Custom API Functions
export const api = {
  get: <T>(url: string) => axiosInstance.get<T>(url),

  post: <T>(url: string, body: object) =>
    axiosInstance.post<T>(url, body),

  put: <T>(url: string, body: object) =>
    axiosInstance.put<T>(url, body),

  delete: <T>(url: string) =>
    axiosInstance.delete<T>(url)
};

export default axiosInstance;
 