<template>
  <div
    :class="`grid justify-start p-2 gap-y-2 min-h-[350px]  relative border ${copiedClass}`"
  >
    <BaseCopyBtn
      class="absolute right-4 top-4"
      :content-to-copy="contentToCopy"
      @copied="copyHandler"
    />
    <div v-if="label" class="px-4 py-2 overflow-hidden">
      <span>{{ label }}</span>
    </div>

    <slot />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseCopyBtn from './BaseCopyBtn.vue';

const isCopied = ref(false);

const COPY_DURATION = 3000;

const copiedClass = computed(() => {
  return isCopied.value ? 'border-primary' : 'border-text-secondary/10';
});

const copyHandler = () => {
  isCopied.value = true;

  setTimeout(() => {
    isCopied.value = false;
  }, COPY_DURATION);
};

defineProps({
  label: {
    type: String,
    required: true,
  },

  contentToCopy: {
    type: [String, Number],
    required: true,
  },
});
</script>
