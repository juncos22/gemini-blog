<template>
  <div>
    <h1>Blog Posts</h1>
    <router-link to="/create" class="button-link">Create Post</router-link>

    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />

    <div v-if="!loading && !error" class="postlist">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<style scoped>
.postlist {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 5px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.button-link {
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 1rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { usePostStore } from "@/stores/postStore";
import Card from "@/components/Card.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Alert from "@/components/Alert.vue";

export default defineComponent({
  components: {
    Card,
    SpinnerLoader,
    Alert,
  },
  computed: {
    posts() {
      return usePostStore().posts;
    },
    loading() {
      return usePostStore().loading;
    },
    error() {
      return usePostStore().error;
    },
  },
  created() {
    usePostStore().fetchPosts();
  },
});
</script>
