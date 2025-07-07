<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="bio">Bio:</label>
      <textarea id="bio" v-model="profile.bio"></textarea>
    </div>
    <button type="submit">{{ buttonText }}</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Profile } from "../types";

export default defineComponent({
  props: {
    profile: {
      type: Object as PropType<Profile>,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Create",
    },
  },
  emits: ["submit"],
  methods: {
    submitForm() {
      this.$emit("submit", this.profile);
    },
  },
});
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
</style>
