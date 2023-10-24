<template>
  <div
    class="border border-text-secondary/10 p-4 grid grid-cols-2 gap-x-4 xl:gap-x-7 gap-y-4"
  >
    <div class="grid gap-y-4">
      <h2 class="font-bold">Values</h2>

      <div class="flex flex-col xl:flex-row gap-2">
        <BaseInput
          v-model="valuesMin"
          label="Minimal Value"
          units="px"
          type="number"
        />
        <BaseInput
          v-model="valuesMax"
          label="Max Value"
          units="px"
          type="number"
        />
      </div>
    </div>
    <div class="grid gap-y-5">
      <h2 class="font-bold">Viewport</h2>
      <div class="flex flex-col xl:flex-row gap-2">
        <BaseInput
          v-model="viewportMin"
          label="Minimal Value"
          units="px"
          type="number"
        />
        <BaseInput
          v-model="viewportMax"
          label="Max Value"
          units="px"
          type="number"
        />
      </div>
    </div>

    <div class="col-span-2 grid gap-y-2">
      <span>Output</span>
      <div
        class="border transition px-4 py-2 relative pr-[30px]"
        :class="{
          'border-primary': wasCopied,
          'border-text-secondary': !wasCopied
        }"
      >
        <p>{{ calculatedClamp }}</p>
        <BaseCopyBtn
          :content-to-copy="calculatedClamp"
          @copied="copyHandler"
          class="absolute right-[10px] top-[10px]"
        />
      </div>
      <p
        class="transition-opacity text-sm text-primary"
        :class="{ 'opacity-1': wasCopied, 'opacity-0': !wasCopied }"
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

const calculatedClamp = computed(() => {
  return `clamp(${pxToRem(valuesMin.value)}rem, ${
    constant.value ? `${constant.value}rem + ` : ""
  } ${parseFloat((100 * variablePart.value).toFixed(2))}vw, ${pxToRem(
    valuesMax.value
  )}rem)`;
});
</script>

<style lang="scss" scoped></style>
