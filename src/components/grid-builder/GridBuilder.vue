<template>
  <section>
    <div class="mb-4 grid gap-y-2 justify-items-start">
      <BaseInput
        v-model="width"
        label="Min size of each card in px"
        type="number"
        placeholder="Width in pxs"
        :isValid="isInputValid"
        errorMessage="This Field Is Required"
      />

      <BaseButton label="Generate" @click="generateHandler" />

      <div class="grid gap-y-2 min-h-[84px] auto-rows-min" ref="outputHead">
        <span>Output Units: </span>
        <div class="flex gap-4">
          <BaseRadioButton
            label="PX"
            v-model="units"
            name="unit"
            value="px"
            checked
            @change="inputHandler"
          />
          <BaseRadioButton
            label="REM"
            v-model="units"
            name="unit"
            value="rem"
            @change="inputHandler"
          />
        </div>
        <p v-show="units === 'rem'" class="text-text-secondary text-sm">
          Calculation based on a root font-size of 16 pixel.
        </p>
      </div>
    </div>

    <GridOutput
      ref="output"
      v-show="generatedWidth"
      :units="units"
      :width="Number(generatedWidth)"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { pxToRem } from "@/helpers/pxToRem.js";

import BaseButton from "@base/BaseButton.vue";
import BaseInput from "@base/BaseInput.vue";
import BaseRadioButton from "@base/BaseRadioButton.vue";
import GridOutput from "./GridOutput.vue";

const generatedWidth = ref(0);

const width = ref("");

const units = ref("px");

const isInputValid = ref(true);

const output = ref(null);
const outputHead = ref(null);

const calculateWidth = () => {
  if (units.value === "rem") {
    return pxToRem(width.value);
  } else {
    return width.value;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToOutputHead = () => {
  setTimeout(() => {
    outputHead.value.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }, 100);
};

const generateHandler = () => {
  if (width.value) {
    generatedWidth.value = calculateWidth();

    isInputValid.value = true;

    output.value.outputElement.style.width = `100%`;

    scrollToOutputHead();

    return;
  }

  isInputValid.value = false;
  scrollToTop();
};

const inputHandler = () => {
  if (generatedWidth.value) {
    generateHandler();
  }
};
</script>
