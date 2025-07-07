<template>
  <div :class="['alert', `alert-${type}`]">
    <strong v-if="title">{{ title }}</strong>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'Alert',
  props: {
    title: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'success' | 'error' | 'warning'>,
      default: 'success',
      validator: (value: string) => ['success', 'error', 'warning'].includes(value),
    },
  },
});
</script>

<style scoped>
.alert {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
</style>
