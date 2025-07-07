<template>
  <div>
    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />
    <div v-if="post && !loading">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <p><strong>Author:</strong> {{ post.author }}</p>
      <p>
        <strong>Published:</strong>
        {{ new Date(post.createdAt).toLocaleDateString() }}
      </p>
      <div class="post-actions">
        <router-link
          :to="{ name: 'EditPost', params: { id: post.id } }"
          class="button-link"
          >Edit Post</router-link
        >
        <button @click="deletePost" class="button-delete">Delete Post</button>
      </div>
      <router-link to="/" class="button-link">Back to list</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePostStore } from "@/stores/postStore";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Alert from "@/components/Alert.vue";

export default defineComponent({
  components: {
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

    const deletePost = async () => {
      if (confirm("Are you sure you want to delete this post?")) {
        await store.deletePost(postId);
        if (!store.error) {
          router.push("/");
        }
      }
    };

    return {
      post,
      loading,
      error,
      deletePost,
    };
  },
});
</script>

<style scoped>
.post-actions {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 10px;
}

.button-delete {
  background-color: #e74c3c;
}

.button-delete:hover {
  background-color: #c0392b;
}
</style>
