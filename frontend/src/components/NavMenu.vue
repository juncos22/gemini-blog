<template>
  <nav>
    <div class="nav-container">
      <router-link to="/" class="nav-logo">🧑‍💻 Gemini Blog 🧑‍💻 </router-link>
      <ul class="nav-links">
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/login">Iniciar Sesión</RouterLink></li>
        <li><RouterLink to="/register">Registrarme</RouterLink></li>
        <li>
          <RouterLink aria-current="page" to="/profiles">Perfil</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavMenu",
});
</script>

<style scoped>
/* ---------- NAV ---------- */
nav {
  background: var(--clr-primary);
  padding: 1rem 5px;
  box-shadow: var(--shadow);
}
nav .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav .nav-logo {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1.25rem;
}
nav .nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.25s;
}
nav .nav-links a:hover,
nav .nav-links a[aria-current="page"] {
  color: #fff;
}
</style>
