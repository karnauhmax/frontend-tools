<template>
  <div>
    <form class="grid gap-y-4 mb-5">
      <label>
        <BaseInput v-model="fontPath" label="Font Path" />
      </label>

      <label>
        <BaseInput v-model="fileName" label="Font Name" />
      </label>

      <div class="grid gap-y-2">
        <p>Formats:</p>
        <div class="flex gap-x-3">
          <BaseCheckbox
            v-for="format in formats"
            :key="format.id"
            :value="format.value"
            :label="format.value"
            v-model="selectedFormats"
            :class="{ 'pointer-events-none': checkIfDisabled(format.value) }"
          />
        </div>
      </div>

      <div class="grid gap-y-2">
        <p>Weights:</p>
        <div class="flex flex-wrap gap-3">
          <BaseRadioButton
            v-for="weight in weights"
            :key="weight.id"
            :checked="weight.checked"
            name="weight"
            :value="weight.value"
            :label="weight.value"
            v-model="selectedWeight"
          />
        </div>
      </div>

      <div class="grid gap-y-2">
        <p>Styles:</p>
        <div class="flex wrap gap-3">
          <BaseRadioButton
            v-for="style in styles"
            name="style"
            :key="style.id"
            :checked="style.checked"
            :value="style.value"
            :label="style.value"
            v-model="selectedStyle"
          />
        </div>
      </div>
    </form>

    <div class="grid gap-y-3">
      <p>Output</p>

      <div :class="`min-h-[350px] transition-colors border ${copiedClass}`">
        <pre>
     {{ result }}
    </pre
        >

        <BaseCopyBtn
          :content-to-copy="result"
          @copied="copyHandler"
          class="absolute top-[15px] right-[15px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseCheckbox from '@base/BaseCheckbox.vue';
import BaseInput from '@base/BaseInput.vue';
import BaseRadioButton from '@base/BaseRadioButton.vue';
import BaseCopyBtn from '@base/BaseCopyBtn.vue';

const fileName = ref('Montserrat');
const fontPath = ref('../fonts/');
const selectedWeight = ref(400);
const selectedStyle = ref('normal');
const wasCopied = ref(false);
const selectedFormats = ref(['woff2']);
const formats = ref([
  {
    id: 1,
    value: 'woff2'
  },

  {
    id: 2,
    value: 'woff'
  },

  {
    id: 3,
    value: 'ttf'
  },

  {
    id: 4,
    value: 'otf'
  }
]);

const weights = ref([
  {
    id: 1,
    value: 100,
    checked: false
  },

  {
    id: 2,
    value: 200,
    checked: false
  },

  {
    id: 3,
    value: 300,
    checked: false
  },

  {
    id: 4,
    value: 400,
    checked: true
  },

  {
    id: 5,
    value: 500,
    checked: false
  },

  {
    id: 6,
    value: 600,
    checked: false
  },

  {
    id: 7,
    value: 700,
    checked: false
  },

  {
    id: 8,
    value: 800,
    checked: false
  },

  {
    id: 9,
    value: 900,
    checked: false
  }
]);

const styles = ref([
  {
    id: 1,
    value: 'normal',
    checked: true
  },

  {
    id: 2,
    value: 'italic',
    checked: false
  },

  {
    id: 3,
    value: 'oblique',
    checked: false
  }
]);

const result = computed(() => {
  const result = `
    @font-face {
      font-family: "${fileName.value}";
      src: ${selectedFormats.value
        .map((format, index, array) => {
          const url = `${fontPath.value}${fileName.value}.${format} `;
          return index === 0
            ? `url("${url}") format("${format}")${
                index < array.length - 1 ? ',' : ';'
              }`
            : `        url("${url}") format("${format}")${
                index < array.length - 1 ? ',' : ';'
              }`;
        })
        .join('\n     ')}
      font-weight: ${selectedWeight.value};
      font-style: ${selectedStyle.value};
    }
  `;
  return result;
});

const copiedClass = computed(() =>
  wasCopied.value ? 'border-primary' : 'border-text-secondary/30'
);

const checkIfDisabled = (value) =>
  selectedFormats.value.length === 1 && selectedFormats.value.includes(value);

const COPY_BUTTON_DELAY = 2000;
const copyHandler = () => {
  wasCopied.value = true;

  setTimeout(() => {
    wasCopied.value = false;
  }, COPY_BUTTON_DELAY);
};
</script>
