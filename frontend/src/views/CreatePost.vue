<template>
  <div>
    <h1>Create Post</h1>
    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />
    <PostForm
      v-if="!loading"
      :post="post"
      @submit="createPost"
      buttonText="Create"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { usePostStore } from "@/stores/postStore";
import PostForm from "../components/PostForm.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Alert from "@/components/Alert.vue";
import type { Post } from "../types";

export default defineComponent({
  components: {
    PostForm,
    SpinnerLoader,
    Alert,
  },
  setup() {
    const store = usePostStore();
    const router = useRouter();

    const post: Post = {
      id: 0, // Not needed for creation
      title: "",
      content: "",
      author: "",
      createdAt: "",
      image: "",
    };

    const createPost = async (postData: Omit<Post, "id">) => {
      await store.createPost(postData);
      if (!store.error) {
        router.push("/");
      }
    };

    return {
      post,
      createPost,
      loading: store.loading,
      error: store.error,
    };
  },
});
</script>
