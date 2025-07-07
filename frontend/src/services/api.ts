import axios from "axios";
import type { Post, User } from "../types";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  getPosts() {
    return apiClient.get<Post[]>("/posts");
  },
  getPost(id: number) {
    return apiClient.get<Post>(`/posts/${id}`);
  },
  createPost(post: Omit<Post, "id" | "createdAt">) {
    return apiClient.post<Post>("/posts", post);
  },
  updatePost(id: number, post: Partial<Omit<Post, "id" | "createdAt">>) {
    return apiClient.put<Post>(`/posts/${id}`, post);
  },
  deletePost(id: number) {
    return apiClient.delete(`/posts/${id}`);
  },
  login(credentials: Omit<User, "id" | "name">) {
    return apiClient.post<{ token: string }>("/auth/login", credentials);
  },
  register(data: Omit<User, "id">) {
    return apiClient.post<User>("/auth/register", data);
  },
};
