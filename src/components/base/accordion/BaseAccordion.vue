<template>
  <div class="grid gap-y-4">
    <div
      class="border-b border-text-secondary/50 grid"
      v-for="(item, index) in items"
      :key="`accordion-item-${index}`"
    >
      <div>
        <button
          type="button"
          class="text-start pb-2 w-full"
          @click="clickHandler(index)"
        >
          <slot name="header" :item="item" />
        </button>
      </div>
      <div
        :class="`grid pb-2 grid-rows-[${
          activeElementIndex === index ? 1 : 0
        }fr] transition-all duration-500`"
      >
        <div class="overflow-hidden">
          <slot name="content" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeElementIndex = ref(0);

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const clickHandler = (index) => {
  if (index !== activeElementIndex.value) {
    activeElementIndex.value = index;
    return;
  }

  activeElementIndex.value = null;
};
</script>
