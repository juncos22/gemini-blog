<template>
  <div id="app">
    <NavMenu />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NavMenu,
  },
});
</script>

<style>
.main-content {
  padding: 2rem;
}
</style>
