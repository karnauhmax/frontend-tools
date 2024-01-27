<template>
  <div>
    <div class="grid gap-y-5 md:gap-y-10">
      <form
        @submit.prevent="generateHandler"
        :class="`grid gap-y-5 ${isLoading ? 'disabled' : ''}`"
      >
        <BaseInput v-model="url" label="URL of the page" />

        <div class="flex gap-x-4">
          <BaseRadioButton
            v-model="deviceType"
            label="Mobile"
            value="mobile"
            name="device-type"
            checked
          />
          <BaseRadioButton
            v-model="deviceType"
            name="device-type"
            label="Desktop"
            value="desktop"
          />
        </div>

        <BaseButton
          label="Generate"
          class="justify-self-start"
          type="submit"
          :disabled="isLoading"
        />
      </form>

      <div class="grid gap-y-8" v-if="showReport && !isLoading">
        <div class="grid gap-y-2 md:max-w-[200px] w-full justify-self-center">
          <PerformanceReportMetric
            :display-value="performanceScore * 100"
            :score="performanceScore"
            title="Performance Score"
          />
        </div>

        <div class="grid grid-cols-performance-metrics-layout gap-x-6 gap-y-8">
          <PerformanceReportMetric
            v-for="(
              [, {
                title, description, displayValue, score,
              }], index
            ) in filteredMetrics"
            :title="title"
            :display-value="displayValue"
            :score="score"
            :description="description"
            :key="index"
          />
        </div>
      </div>
    </div>
    <BaseLoader class="absolute right-1/2 transform-x-1/2" v-if="isLoading" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from '@stores/main-store.ts';
import { storeToRefs } from 'pinia';

import BaseInput from '@base/BaseInput.vue';
import BaseButton from '@base/BaseButton.vue';
import BaseLoader from '@base/BaseLoader.vue';
import BaseRadioButton from '@base/BaseRadioButton.vue';
import PerformanceReportMetric from '@/components/performance-report/PerformanceReportMetric.vue';

const store = useStore();

const { pageSpeedReport } = storeToRefs(store);
const { generatePageSpeedReport } = store;

const url = ref('https://alescalifetech.com/');
const showReport = ref(false);
const isLoading = ref(false);
const deviceType = ref('mobile');

const generateHandler = () => {
  isLoading.value = true;
  generatePageSpeedReport(url.value, deviceType.value).then(() => {
    showReport.value = true;
    isLoading.value = false;
  });
};

const METRICS_MAP = [
  'cumulative-layout-shift',
  'largest-contentful-paint',
  'first-contentful-paint',
  'speed-index',
  'total-blocking-time',
  'first-input-delay',
  'first-meaningful-paint',
];

const pagespeedReportAudits = computed(
  () => pageSpeedReport.value.lighthouseResult?.audits,
);

const filteredMetrics = computed(() => {
  const splitedMetrics = Object.entries(pagespeedReportAudits.value);

  return splitedMetrics.filter(([title]) => METRICS_MAP.includes(title));
});

const performanceScore = computed(
  () => pageSpeedReport.value.lighthouseResult?.categories.performance.score,
);
</script>
