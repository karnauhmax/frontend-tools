<template>
  <div
    class="border border-text-secondary/10 p-4 grid grid-cols-2 gap-x-4 xl:gap-x-7 gap-y-4"
  >
    <div class="grid gap-y-4">
      <p class="font-bold">Values</p>

      <div class="flex flex-col xl:flex-row gap-2">
        <BaseInput
          v-for="({ id, label, units, type }, index) in valuesInputsConfig"
          :key="id"
          :units="units"
          :type="type"
          :label="label"
          v-model="valuesInputsConfig[index].value"
        />
      </div>
    </div>
    <div class="grid gap-y-5">
      <p class="font-bold">Viewport</p>
      <div class="flex flex-col xl:flex-row gap-2">
        <BaseInput
          v-for="item in viewportInputsConfig"
          :key="item.id"
          :units="item.units"
          :type="item.type"
          :label="item.label"
          v-model="item.value"
        />
      </div>
    </div>

    <div class="col-span-2 grid gap-y-2">
      <span>Output</span>
      <div
        :class="`border transition px-2 py-2 relative pr-[30px] ${
          wasCopied ? 'border-primary' : 'border-text-secondary'
        }`"
      >
        <p>{{ calculatedClamp }}</p>
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { pxToRem } from "@/helpers/pxToRem.js";

import BaseCopyBtn from "@base/BaseCopyBtn.vue";
import BaseInput from "@base/BaseInput.vue";

const viewportMin = ref(360);
const viewportMax = ref(1920);

const valuesMax = ref(24);
const valuesMin = ref(16);

const wasCopied = ref(false);

const copyHandler = () => {
  wasCopied.value = true;

  setTimeout(() => {
    wasCopied.value = false;
  }, 3000);
};

const viewportInputsConfig = ref([
  {
    id: 1,
    label: "Min",
    units: "px",
    type: "number",
    value: viewportMin
  },

  {
    id: 2,
    label: "Max",
    units: "px",
    type: "number",
    value: viewportMax
  }
]);

const valuesInputsConfig = ref([
  {
    id: 1,
    label: "Max",
    units: "px",
    type: "number",
    value: valuesMin
  },

  {
    id: 2,
    label: "Min",
    units: "px",
    type: "number",
    value: valuesMax
  }
]);

const variablePart = computed(() => {
  return (
    (valuesMax.value - valuesMin.value) /
    (viewportMax.value - viewportMin.value)
  );
});

const constant = computed(() => {
  return parseFloat(
    ((valuesMax.value - viewportMax.value * variablePart.value) / 16).toFixed(3)
  );
});

const minPx = computed(() => {
  return pxToRem(valuesMin.value);
});

const maxPx = computed(() => {
  return pxToRem(valuesMax.value);
});

const calculatedClamp = computed(() => {
  return `clamp(${minPx.value}rem, ${
    constant.value ? `${constant.value}rem + ` : ""
  } ${parseFloat((100 * variablePart.value).toFixed(2))}vw, ${maxPx.value}rem)`;
});
</script>
