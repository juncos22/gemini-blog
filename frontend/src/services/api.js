import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default {
  getPosts() {
    return apiClient.get("/posts");
  },
  getPost(id) {
    return apiClient.get(`/posts/${id}`);
  },
  createPost(post) {
    return apiClient.post("/posts", post);
  },
  updatePost(id, post) {
    return apiClient.put(`/posts/${id}`, post);
  },
  deletePost(id) {
    return apiClient.delete(`/posts/${id}`);
  },
};
