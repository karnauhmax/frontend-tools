<template>
  <div
    class="cursor-pointer relative bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400 h-[20px] rounded-md"
  >
    <GradientColorPoint />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GradientColorPoint from './GradientColorPoint.vue';

let x = ref(0);
let y = ref(0);
</script>

<style lang="scss" scoped></style>
