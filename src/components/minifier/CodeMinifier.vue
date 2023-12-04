<template>
  <div class="flex flex-wrap gap-x-5 mb-4">
    <BaseRadioButton
      v-for="option in options"
      name="option"
      :key="option.value"
      :value="option.value"
      :label="option.title"
      :checked="option.checked"
      v-model="selectedOption"
    />
  </div>
  <div class="flex flex-wrap gap-x-5 mb-4">
    <BaseCheckbox v-show="selectedOption === 'js'" label="Uglify" v-model="uglifyJs" />
  </div>

  <div class="grid gap-y-4">
    <div class="border border-text-secondary/10 py-2 px-4">
      <p>Input</p>
    </div>

    <textarea
      class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] transition focus:outline-none focus:border-primary p-4 custom-scrollbar" v-model="inputValue"
    ></textarea>
    <BaseButton class="max-w-[150px]" label="Generate" @click="minifyJavaScript(inputValue, uglifyJs)" />
    <div class="border border-text-secondary/10 py-2 px-4">
      <p>Output</p>
    </div>
    <div class="relative">
      <textarea
      class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] transition focus:outline-none focus:border-primary p-4 custom-scrollbar" v-model="outputValue"
      ></textarea>
      <!-- <BaseCopyBtn class="top-4 right-4 absolute" :content-to-copy="outputValue" /> -->
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@base/BaseButton.vue";
import BaseRadioButton from "@base/BaseRadioButton.vue";
import BaseCheckbox from "@base/BaseCheckbox.vue";
import BaseCopyBtn from "@base/BaseCopyBtn.vue";

import { ref, computed } from "vue";


const outputValue = ref("");
const inputValue  = ref("");
const uglifyJs  = ref(true);
const selectedOption = ref("js");

const generateHandler = () => {
};


const minifyCss = () => {
  
}

function minifyJavaScript(inputCode, uglify = true) {
  let minifiedCode = inputCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

  minifiedCode = minifiedCode.replace(/\s+/g, ' ');

  if (uglify) {
    minifiedCode = minifiedCode.replace(/[a-zA-Z_]\w*/g, function (match) {
      return match.charAt(0);
    });
  }

  console.log(uglify);

  outputValue.value = minifiedCode;

  return minifiedCode;
}

const options = ref([
  {
    title: "JavaScript",
    value: "js",
    checked: true
  },
  {
    title: "CSS",
    value: "css",
    checked: false
  },

  {
    title: "SCSS",
    value: "scss",
    checked: false
  }
]);









</script>

<style lang="scss" scoped></style>
