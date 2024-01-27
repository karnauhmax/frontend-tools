<template>
  <div class="col-span-2 grid gap-y-2">
    <span>Output</span>
    <div
      :class="`border transition px-2 py-2 relative pr-[30px] ${
        wasCopied ? 'border-primary' : 'border-text-secondary'
      }`"
    >
      <slot />
      <BaseCopyBtn
        :content-to-copy="calculatedClamp"
        @copied="copyHandler"
        class="absolute right-[10px] top-[10px]"
      />
    </div>
    <p
      :class="`transition-opacity text-sm text-primary ${
        wasCopied ? 'opacity-1' : 'opacity-0'
      }`"
    >
      Copied
    </p>
  </div>
</template>

<script setup>
import BaseCopyBtn from '@/components/base/BaseCopyBtn.vue';
</script>

<style lang="scss" scoped></style>
