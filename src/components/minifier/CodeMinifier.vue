<template>
  <div class="flex flex-wrap gap-x-5 mb-4">
    <BaseRadioButton
      v-for="option in options"
      name="option"
      :key="option.value"
      :value="option.value"
      :label="option.title"
      :checked="option.checked"
    />
  </div>

  <div class="grid gap-y-4">
    <div class="border border-text-secondary/10 py-2 px-4">
      <p>Input</p>
    </div>

    <textarea
      class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] focus:outline-none focus:border-primary p-4"
    ></textarea>
    <BaseButton class="max-w-[150px]" label="Generate" />
    <div class="border border-text-secondary/10 py-2 px-4">
      <p>Output</p>
    </div>
    <textarea
      class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] focus:outline-none focus:border-primary p-4"
    ></textarea>
  </div>
</template>

<script setup>
import BaseButton from "@base/BaseButton.vue";
import BaseRadioButton from "@base/BaseRadioButton.vue";

import { ref, computed } from "vue";

const generateHandler = () => {};
const options = ref([
  {
    title: "JavaScript",
    value: "js",
    checked: true
  },
  {
    title: "CSS",
    value: "css",
    checked: false
  },

  {
    title: "SCSS",
    value: "scss",
    checked: false
  }
]);
</script>

<style lang="scss" scoped></style>
