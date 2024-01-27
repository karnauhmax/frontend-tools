<template>
  <div class="grid gap-y-2">
    <div class="grid items-center gap-x-2 grid-cols-performance-items-layout">
      <p class="text-md">{{ title }}</p>

      <template v-if="description">
        <BaseTooltip>
          {{ description }}
        </BaseTooltip>
        <InformationOutline :size="21" class="tooltip-icon" />
      </template>
    </div>
    <div
      :class="`min-w-[80px] min-h-[80px] rounded-sm border text-primary font-bold text-3xl grid place-items-center ${getColorByScore(
        score,
      )}`"
    >
      {{ displayValue }}
    </div>
  </div>
</template>

<script setup>
import InformationOutline from 'vue-material-design-icons/InformationOutline.vue';
import BaseTooltip from '@/components/base/BaseTooltip.vue';

const getColorByScore = (score) => {
  const percentageScore = score * 100;

  return percentageScore >= 89
    ? 'border-score-high text-score-high'
    : percentageScore >= 50 && percentageScore < 89
      ? 'border-score-mid text-score-mid'
      : 'border-score-low text-score-low';
};

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  displayValue: {
    type: [String, Number],
    required: true,
  },

  score: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
