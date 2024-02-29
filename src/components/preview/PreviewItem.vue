<template>
  <RouterLink
    :to="renderedPath"
    class="grid p-4 rounded-md auto-rows-min gap-y-1 bg-gradient-to-b from-gray-700/50 to-dark hover:-translate-y-3 transition-transform duration-300 min-h-[140px]"
  >
    <h3 class="font-bold text-lg">
      {{ title }}
    </h3>
    <p>
      {{ description }}
    </p>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
});

const renderedPath = `/${props.url}`;
</script>
