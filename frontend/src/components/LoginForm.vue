<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { usePostStore } from "../stores/postStore";

const email = ref("");
const password = ref("");
const store = usePostStore();

const handleSubmit = async () => {
  await store.login(email.value, password.value);
};
</script>

<style>
/* ---------- FORMS ---------- */
form {
  background: #fff;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 450px;
  margin: 2rem auto;
}
form h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--clr-primary-dark);
}
label {
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 600;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.65rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  transition: border-color 0.25s;
}
input:focus {
  border-color: var(--clr-primary);
  outline: none;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: var(--clr-accent);
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.25s;
}
button:hover {
  background: #ea580c;
}
</style>
