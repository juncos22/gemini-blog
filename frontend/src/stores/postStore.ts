import { defineStore } from "pinia";
import api from "../services/api";
import type { Post, User, Profile } from "../types";

interface AuthStoreState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
  user: User | null;
  token: string | null;
  profiles: Profile[];
  profile: Profile | null;
}

export const usePostStore = defineStore("post", {
  state: (): AuthStoreState => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
    user: null,
    token: localStorage.getItem("token") || null,
    profiles: [],
    profile: null,
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
    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.login({ email, password });
        this.token = response.data.token;
        localStorage.setItem("token", response.data.token);
        // You might want to fetch user data here and set it to the state
      } catch (error) {
        this.error = "Failed to login";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async register(name: string, email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        await api.register({ name, email, password });
        // You might want to automatically login the user after registration
      } catch (error) {
        this.error = "Failed to register";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },
    async fetchProfiles() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getProfiles();
        this.profiles = response.data;
      } catch (error) {
        this.error = "Failed to fetch profiles";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async fetchProfile(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getProfile(id);
        this.profile = response.data;
      } catch (error) {
        this.error = "Failed to fetch profile";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async createProfile(profileData: Omit<Profile, "id">) {
      this.loading = true;
      this.error = null;
      try {
        await api.createProfile(profileData);
        await this.fetchProfiles(); // Refresh the list
      } catch (error) {
        this.error = "Failed to create profile";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async updateProfile(id: number, profileData: Profile) {
      this.loading = true;
      this.error = null;
      try {
        await api.updateProfile(id, profileData);
        await this.fetchProfiles(); // Refresh the list
      } catch (error) {
        this.error = "Failed to update profile";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async deleteProfile(id: number) {
      this.loading = true;
      this.error = null;
      try {
        await api.deleteProfile(id);
        await this.fetchProfiles(); // Refresh the list
      } catch (error) {
        this.error = "Failed to delete profile";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
