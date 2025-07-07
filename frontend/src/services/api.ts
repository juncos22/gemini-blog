import axios from 'axios';
import type { Post } from '../types';

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default {
  getPosts() {
    return apiClient.get<Post[]>("/posts");
  },
  getPost(id: number) {
    return apiClient.get<Post>(`/posts/${id}`);
  },
  createPost(post: Omit<Post, 'id' | 'createdAt'>) {
    return apiClient.post<Post>("/posts", post);
  },
  updatePost(id: number, post: Partial<Omit<Post, 'id' | 'createdAt'>>) {
    return apiClient.put<Post>(`/posts/${id}`, post);
  },
  deletePost(id: number) {
    return apiClient.delete(`/posts/${id}`);
  },
};