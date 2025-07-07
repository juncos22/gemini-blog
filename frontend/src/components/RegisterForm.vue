<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { usePostStore } from "../stores/postStore";

const name = ref("");
const email = ref("");
const password = ref("");
const store = usePostStore();

const handleSubmit = async () => {
  await store.register(name.value, email.value, password.value);
};
</script>
