<template>
  <div
    class="border border-text-secondary/10 p-4 grid grid-cols-2 gap-x-4 xl:gap-x-7 gap-y-4"
  >

  <div class="flex items-center gap-4 col-span-2">

    <!-- <div class="flex gap-x-3">
      <button v-for="unit in availableUnits" 
       :key="unit.id" 
       :class="`font-bold transition-colors border-b-2 border-${selectedUnits === unit.value ? 'primary' : 'transparent'}`"
       @click="selectUnitsHandler(unit.value)"
       >
       {{ unit.name }}
      </button>
    </div> -->
  </div>

    <div class="grid gap-y-4">
      <p class="font-bold">Values</p>

      <div class="flex flex-col xl:flex-row gap-2">
        <BaseInput
          v-model="valuesMin"
          label="Minimal Value"
          :units="selectedUnits"
          type="number"
        />
        <BaseInput
          v-model="valuesMax"
          label="Max Value"
          :units="selectedUnits"
          type="number"
        />
      </div>
    </div>
    <div class="grid gap-y-5">
      <p class="font-bold">Viewport</p>
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
        class="border transition px-2 py-2 relative pr-[30px]"
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
import { remToPx } from "@/helpers/remToPx.js";
import BaseCopyBtn from "@base/BaseCopyBtn.vue";
import BaseInput from "@base/BaseInput.vue";

const viewportMin = ref(360);
const viewportMax = ref(1920);

const valuesMax = ref(24);
const valuesMin = ref(16);

const wasCopied = ref(false);

const availableUnits = ref([
  {
    id: 1,
    name: "px",
    value: "px",
  },

  {
    id: 2,
    name: "rem",
    value: "rem",
  }
])

const selectedUnits = ref("px");

const isRem = computed(() => {
  return selectedUnits.value === "rem";
});

const selectUnitsHandler = (units) => {
  selectedUnits.value = units;
  
  if (isRem.value) {
    valuesMax.value = pxToRem(valuesMax.value);
    valuesMin.value = pxToRem(valuesMin.value);
    
  } else {
    valuesMax.value = remToPx(valuesMax.value);
    valuesMin.value = remToPx(valuesMin.value);
  }
}

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
    )

});

const minPx = computed(() => {
  return pxToRem(valuesMin.value)
})

const maxPx = computed(() => {
  return pxToRem(valuesMax.value)
})

const calculatedClamp = computed(() => {
  return `clamp(${minPx.value}rem, ${
    constant.value ? `${constant.value}rem + ` : ""
  } ${parseFloat((100 * variablePart.value).toFixed(2))}vw, ${maxPx.value}rem)`;
});
</script>

<style lang="scss" scoped></style>
