<template>
  <section>
    <h2 class="text-white text-3xl font-medium mb-7">Available Helpers</h2>
    <div class="grid grid-cols-4 gap-4 pb-16">
      <PreviewItem
        v-for="item in previewItems"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :url="item.url"
      />
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "@stores/main-store.ts";
import PreviewItem from "./PreviewItem.vue";

const store = useStore();

const { previewItems } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
