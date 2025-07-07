import { defineStore } from "pinia";
import api from "../services/api";
import type { Post } from "../types";

interface PostStoreState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
}

export const usePostStore = defineStore("post", {
  state: (): PostStoreState => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getPosts();
        this.posts = response.data;
      } catch (error) {
        this.error = "Failed to fetch posts";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getPost(id);
        this.post = response.data;
      } catch (error) {
        this.error = "Failed to fetch post";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async createPost(postData: Omit<Post, "id">) {
      this.loading = true;
      this.error = null;
      try {
        await api.createPost(postData);
        await this.fetchPosts(); // Refresh the list
      } catch (error) {
        this.error = "Failed to create post";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async updatePost(id: number, postData: Post) {
      this.loading = true;
      this.error = null;
      try {
        await api.updatePost(id, postData);
        await this.fetchPosts(); // Refresh the list
      } catch (error) {
        this.error = "Failed to update post";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async deletePost(id: number) {
      this.loading = true;
      this.error = null;
      try {
        await api.deletePost(id);
        await this.fetchPosts(); // Refresh the list
      } catch (error) {
        this.error = "Failed to delete post";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
