<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="post.title" />
    </div>
    <div>
      <label for="content">Content:</label>
      <textarea id="content" v-model="post.content"></textarea>
    </div>
    <div>
      <label for="author">Author:</label>
      <input type="text" id="author" v-model="post.author" />
    </div>
    <button type="submit">{{ buttonText }}</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Post } from "../types";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
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
      this.$emit("submit", this.post);
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
textarea {
  width: 100%;
  padding: 0.65rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  transition: border-color 0.25s;
}
</style>
