
<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="createPost">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="post.title">
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="post.content"></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      post: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    createPost() {
      api.createPost(this.post).then(() => {
        this.$router.push('/');
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
</style>
