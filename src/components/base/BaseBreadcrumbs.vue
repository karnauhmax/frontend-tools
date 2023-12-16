<template>
  <ol class="mb-4 flex gap-x-3">
    <li
      class="[&:not(:last-child)]:after:content-['/'] pr-4 relative after:absolute after:right-0 last:text-primary transition-colors hover:text-primary"
    >
      <RouterLink to="/"> Home </RouterLink>
    </li>
    <li
      class="[&:not(:last-child)]:after:content-['/'] pr-4 relative after:absolute after:right-0 last:text-primary transition-colors hover:text-primary"
      v-for="link in router.matched"
      :key="link.title"
    >
      <RouterLink :to="link.path">{{ link.meta.title }}</RouterLink>
    </li>
  </ol>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router";

defineProps({
  links: {
    type: Array,
    required: true
  }
});

const router = useRoute();
</script>

<style lang="scss" scoped></style>
