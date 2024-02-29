<template>
  <div class="grid gap-y-4">
    <div class="grid gap-y-2">
      <div class="border border-text-secondary/10 px-4 py-2">
        <span>Output</span>
      </div>
      <div class="border border-text-secondary/10 px-4 py-2">
        {{ output }}
      </div>
    </div>

    <div class="grid gap-y-2">
      <div class="border border-text-secondary/10 px-4 py-2 overflow-hidden">
        <span>Result</span>
      </div>

      <div clas="overflow-hidden">
        <div
          class="resize-x overflow-hidden transition-[width] will-change-[width]"
          ref="outputElement"
        >
          <div
            class="grid gap-4 builder-grid border border-text-secondary/10 p-4 overflow-hidden"
          >
            <div
              v-for="(item, index) in 12"
              :key="index"
              class="bg-primary rounded-md min-h-[150px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, computed, ref } from 'vue';

const props = defineProps({
  width: {
    type: Number,
  },

  units: {
    type: String,
  },
});

const outputElement = ref(null);

defineExpose({
  outputElement,
});

const { units, width } = toRefs(props);

const unitsSelected = computed(() => (units.value === 'rem' ? 'rem' : 'px'));

const cardsWidth = computed(
  () =>
    `repeat(auto-fill, minmax(min(100%, ${width.value}${unitsSelected.value}), 1fr))`
);

const output = computed(() => {
  return `grid-template-columns: ${cardsWidth.value}`;
});
</script>

<style lang="scss" scoped>
.builder-grid {
  grid-template-columns: v-bind('cardsWidth');
}
</style>
