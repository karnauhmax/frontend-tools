<template>
  <div class="grid gap-y-2">
    <div class="border border-text-secondary/10 px-4 py-2 overflow-hidden">
      <span>{{ label }}</span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped></style>
