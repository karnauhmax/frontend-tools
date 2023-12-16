<template>
  <aside
    class="rounded-md bg-gradient-to-b from-gray-700/50 to-dark sticky self-start"
  >
    <div class="px-5 py-2 border-b border-text-secondary/10">
      <p class="text-center font-bold">Check out the Other Helpers</p>
    </div>
    <div class="px-5 py-2 grid gap-y-3">
      <RouterLink
        class="font-bold hover:text-primary transition-colors duration-300"
        :to="`/helpers/${helper.url}`"
        v-for="helper in previewItems"
        :key="helper.id"
      >
        {{ helper.title }}
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import { useStore } from "@stores/main-store.ts";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const store = useStore();

const { previewItems } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
