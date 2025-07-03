
<template>
  <div>
    <h1>Blog Posts</h1>
    <router-link to="/create" class="button-link">Create Post</router-link>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    api.getPosts().then(response => {
      this.posts = response.data;
    });
  }
};
</script>
