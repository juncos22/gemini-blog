
<template>
  <div>
    <h1>Profiles</h1>
    <router-link to="/profiles/create">Create New Profile</router-link>
    <div v-if="store.loading">Loading profiles...</div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <ul v-else>
      <li v-for="profile in store.profiles" :key="profile.id">
        <router-link :to="`/profiles/${profile.id}`">{{ profile.bio }} (User ID: {{ profile.userId }})</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePostStore } from '../stores/postStore';

const store = usePostStore();

onMounted(() => {
  store.fetchProfiles();
});
</script>
