<template>
  <div class="flex flex-wrap gap-x-5 gap-y-3 mb-4">
    <BaseRadioButton
      v-for="option in minifyOptions"
      name="option"
      :key="option.value"
      :value="option.value"
      :label="option.title"
      :checked="option.checked"
      :modelValue="selectedOption"
      @update:modelValue="updateHandler($event)"
    />
  </div>

  <div class="grid gap-y-4">
    <div class="border border-text-secondary/10 py-2 px-4">
      <p>Input</p>
    </div>

    <div class="relative">
      <textarea
        class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] transition focus:outline-none focus:border-primary p-4 custom-scrollbar"
        v-model="inputValue"
      />
      <BaseCopyBtn
        class="top-4 right-4 absolute"
        :content-to-copy="outputValue"
      />
    </div>
    <BaseButton
      class="max-w-[150px]"
      label="Generate"
      @click="generateHandler"
    />
    <div class="border border-text-secondary/10 py-2 px-4">
      <p>Output</p>
    </div>
    <div class="relative">
      <textarea
        class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] transition focus:outline-none focus:border-primary p-4 custom-scrollbar"
        v-model="outputValue"
      />
      <BaseCopyBtn
        class="top-4 right-4 absolute"
        :content-to-copy="outputValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@stores/main-store.ts';

import BaseButton from '@base/BaseButton.vue';
import BaseCopyBtn from '@base/BaseCopyBtn.vue';
import BaseRadioButton from '@base/BaseRadioButton.vue';

const store = useStore();
const { minifyCss, minifyHtml, minifyJavaScript } = store;
const { minifyOptions } = storeToRefs(store);

const outputValue = ref('');
const inputValue = ref('');
const selectedOption = ref('js');

const generateHandler = () => {
  if (selectedOption.value === 'js') {
    outputValue.value = minifyJavaScript(inputValue.value);
  } else if (selectedOption.value === 'css') {
    outputValue.value = minifyCss(inputValue.value);
  } else if (selectedOption.value === 'html') {
    outputValue.value = minifyHtml(inputValue.value);
  }
};

const updateHandler = (value) => {
  selectedOption.value = value;

  outputValue.value = '';
  inputValue.value = '';
};
</script>
