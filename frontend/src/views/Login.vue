<template>
  <div>
    <h1>Login</h1>
    <LoginForm />
    <SpinnerLoader v-if="loading" />
    <Alert v-if="error" :message="error" type="error" />
  </div>
</template>

<script lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import Alert from "@/components/Alert.vue";
import { defineComponent } from "vue";
import { usePostStore } from "@/stores/postStore";
import { computed } from "vue";

export default defineComponent({
  components: {
    LoginForm,
    SpinnerLoader,
    Alert,
  },
  setup() {
    const store = usePostStore();
    const loading = computed(() => store.loading);
    const error = computed(() => store.error);
    return {
      loading,
      error,
    };
  },
});
</script>
