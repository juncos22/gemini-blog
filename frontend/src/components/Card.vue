<template>
  <div class="card">
    <div class="card-image-container">
      <img
        v-if="post.image"
        :src="post.image"
        alt="Card Image"
        class="card-image"
      />
      <div v-else class="card-image-placeholder"></div>
    </div>
    <div class="card-content">
      <h3 v-if="post.title" class="card-title">{{ post.title }}</h3>
      <p v-if="post.content" class="card-description">{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/types/index";
interface Props {
  post: Post;
}
const props = defineProps<Props>();
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s;
}
.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card-content {
  padding: 1.25rem;
  flex: 1;
}
.card-content h3 {
  margin-bottom: 0.5rem;
  color: var(--clr-primary-dark);
}
.card-content p {
  font-size: 0.95rem;
  opacity: 0.9;
}
</style>
