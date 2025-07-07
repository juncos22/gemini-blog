<template>
  <div>
    <h1>Profile Detail</h1>
    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />
    <div v-if="profile && !loading">
      <p><strong>Bio:</strong> {{ profile.bio }}</p>
      <p><strong>User ID:</strong> {{ profile.userId }}</p>
      <router-link :to="`/profiles/${profile.id}/edit`"
        >Edit Profile</router-link
      >
      <button @click="handleDeleteProfile">Delete Profile</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePostStore } from "../stores/postStore";
import type { Profile } from "../types";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import Alert from "../components/Alert.vue";

const store = usePostStore();
const route = useRoute();
const router = useRouter();
const profile = ref<Profile | null>(null);
const loading = computed(() => store.loading);
const error = computed(() => store.error);

onMounted(async () => {
  const profileId = parseInt(route.params.id as string);
  await store.fetchProfile(profileId);
  profile.value = store.profile;
});

const handleDeleteProfile = async () => {
  if (profile.value) {
    await store.deleteProfile(profile.value.id);
    router.push("/profiles"); // Redirect to profiles list or dashboard
  }
};
</script>
