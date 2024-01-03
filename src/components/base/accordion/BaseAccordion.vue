<template>
  <div class="grid gap-y-4">
    <div
      class="border-b border-text-secondary/50 grid"
      v-for="(item, index) in items"
      :key="`accordion-item-${index}`"
    >
      <div>
        <button class="text-start pb-2 w-full" @click="clickHandler(index)">
          <slot name="header" :item="item" />
        </button>
      </div>
      <div
        class="grid pb-2 transition-all duration-300"
        :class="{
          'grid-rows-[0fr]': activeElementIndex !== index,
          'grid-rows-[1fr]': activeElementIndex === index
        }"
      >
        <div class="overflow-hidden">
          <slot name="content" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref } from "vue";

const { items } = toRefs(props);

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const activeElementIndex = ref(0);

const clickHandler = (index) => {
  if (index !== activeElementIndex.value) {
    activeElementIndex.value = index;
    return;
  }

  activeElementIndex.value = null;
};
</script>
