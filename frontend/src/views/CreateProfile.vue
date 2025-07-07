<template>
  <div>
    <h1>Create Profile</h1>
    <ProfileForm
      :profile="newProfile"
      button-text="Create Profile"
      @submit="handleCreateProfile"
    />
    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ProfileForm from "../components/ProfileForm.vue";
import { usePostStore } from "../stores/postStore";
import type { Profile } from "../types";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import Alert from "../components/Alert.vue";

const store = usePostStore();
const loading = computed(() => store.loading);
const error = computed(() => store.error);

const newProfile = ref<Profile>({
  id: 0, // Temporary ID, will be replaced by the backend
  bio: "",
  userId: 0, // Temporary ID, will be replaced by the backend
});

const handleCreateProfile = async (profileData: Profile) => {
  await store.createProfile(profileData);
  // Optionally, redirect to profile detail or dashboard
};
</script>
