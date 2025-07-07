<template>
  <div>
    <h1>Edit Profile</h1>
    <ProfileForm
      v-if="profile"
      :profile="profile"
      button-text="Update Profile"
      @submit="handleUpdateProfile"
    />
    <p v-else>
      <SpinnerLoader />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProfileForm from "../components/ProfileForm.vue";
import { usePostStore } from "../stores/postStore";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import type { Profile } from "../types";

const store = usePostStore();
const route = useRoute();
const profile = ref<Profile | null>(null);

onMounted(async () => {
  const profileId = parseInt(route.params.id as string);
  await store.fetchProfile(profileId);
  profile.value = store.profile;
});

const handleUpdateProfile = async (profileData: Profile) => {
  if (profile.value) {
    await store.updateProfile(profile.value.id, profileData);
    // Optionally, redirect to profile detail or dashboard
  }
};
</script>
