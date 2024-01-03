<template>
  <div>
    <form
      @submit.prevent
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
        @click="generateHandler"
        :disabled="isLoading"
      />
    </form>

    <div class="grid gap-y-10" v-if="showReport && !isLoading">
      <div class="grid gap-y-2 max-w-[200px] justify-self-center">
        <div class="grid grid-cols-performance-items-layout items-center">
          <p class="text-md">Performance Score</p>
        </div>
        <div
          class="w-[200px] min-h-[80px] rounded-sm border border-primary text-primary font-bold text-3xl grid place-items-center justify-self-center"
        >
          {{ performanceScore }}
        </div>
      </div>

      <div class="grid grid-cols-4 gap-y-4 gap-x-8">
        <div
          class="grid gap-y-2"
          v-for="([, metric], index) in filteredMetrics"
          :key="index"
        >
          <div
            class="grid items-center gap-x-2 grid-cols-performance-items-layout"
          >
            <p class="text-md">{{ metric.title }}</p>

            <BaseTooltip>
              {{ metric.description }}
            </BaseTooltip>
            <InformationOutline :size="21" class="tooltip-icon" />
          </div>
          <div
            class="min-w-[80px] min-h-[80px] rounded-sm border border-primary text-primary font-bold text-3xl grid place-items-center"
          >
            {{ metric.displayValue }}
          </div>
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
import BaseTooltip from '@base/BaseTooltip.vue';
import BaseRadioButton from '@base/BaseRadioButton.vue';
import InformationOutline from 'vue-material-design-icons/informationOutline.vue';

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
  () => pageSpeedReport.value.lighthouseResult?.categories.performance.score * 100,
);
</script>
