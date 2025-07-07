<template>
  <div>
    <h1>Edit Post</h1>
    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />
    <PostForm
      v-if="post && !loading"
      :post="post"
      @submit="updatePost"
      buttonText="Update"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
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
    const route = useRoute();
    const router = useRouter();
    const postId = parseInt(route.params.id as string);

    onMounted(() => {
      store.fetchPost(postId);
    });

    const post = computed(() => store.post);
    const loading = computed(() => store.loading);
    const error = computed(() => store.error);

    const updatePost = async (postData: Post) => {
      await store.updatePost(postId, postData);
      if (!store.error) {
        router.push({ name: "PostDetail", params: { id: postId } });
      }
    };

    return {
      post,
      updatePost,
      loading,
      error,
    };
  },
});
</script>
