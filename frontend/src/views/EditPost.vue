
<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="post.title">
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="post.content"></textarea>
      </div>
      <button type="submit">Update</button>
    </form>
    <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="button-link">Cancel</router-link>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  props: ['id'],
  data() {
    return {
      post: {
        title: '',
        content: ''
      }
    };
  },
  created() {
    api.getPost(this.id).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost() {
      api.updatePost(this.id, this.post).then(() => {
        this.$router.push({ name: 'PostDetail', params: { id: this.id } });
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
