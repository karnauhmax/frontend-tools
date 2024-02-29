<template>
  <ol class="mb-4 flex gap-x-3">
    <li
      class="[&:not(:last-child)]:after:content-['/'] pr-4 relative after:absolute after:right-0 last:text-primary transition-colors hover:text-primary"
    >
      <RouterLink to="/"> Home </RouterLink>
    </li>
    <li
      class="[&:not(:last-child)]:after:content-['/'] pr-4 relative after:absolute after:right-0 last:text-primary last:pointer-events-none transition-colors hover:text-primary"
      v-for="{ title, meta, path } in router.matched"
      :key="title"
    >
      <RouterLink :to="`${path}`">{{ meta.title }}</RouterLink>
    </li>
  </ol>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";

const router = useRoute();
</script>
