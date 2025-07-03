
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <div class="post-actions">
      <router-link :to="{ name: 'EditPost', params: { id: post.id } }" class="button-link">Edit Post</router-link>
      <button @click="deletePost" class="button-delete">Delete Post</button>
    </div>
    <router-link to="/" class="button-link">Back to list</router-link>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  props: ['id'],
  data() {
    return {
      post: {}
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      api.getPost(this.id).then(response => {
        this.post = response.data;
      }).catch(error => {
        console.error("Error fetching post:", error);
        this.$router.push('/'); // Redirect if post not found
      });
    },
    deletePost() {
      if (confirm('Are you sure you want to delete this post?')) {
        api.deletePost(this.id).then(() => {
          this.$router.push('/');
        }).catch(error => {
          console.error("Error deleting post:", error);
        });
      }
    }
  }
};
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
