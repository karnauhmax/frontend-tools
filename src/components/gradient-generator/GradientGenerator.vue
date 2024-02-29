<template>
  <div class="grid gap-y-10">
    <div
      class="bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400 h-[250px] rounded-md"
    ></div>

    <GradientColorLine />

    <div class="grid gap-y-4">
      <div class="bg-red-600 hidden h-[250px] rounded-md"></div>

      <div class="grid gap-y-5">
        <div class="flex gap-5 items-start">
          <div class="grid gap-y-2">
            <p>Gradient Type</p>
            <div class="flex items-center gap-2">
              <BaseRadioButton
                label="Radial"
                name="type"
                v-model="gradientType"
                checked
              />
              <BaseRadioButton
                v-model="gradientType"
                label="Linear"
                name="type"
              />
            </div>
          </div>
        </div>

        <div>
          <BaseInput label="Hex code" v-model="hexCode" />
        </div>

        <div class="grid gap-4 grid-cols-4">
          <BaseInput
            v-for="item in rgbInputsMap"
            :label="item.label"
            :key="item.id"
            v-model="item.model"
            type="number"
          />
        </div>

        <div>
          <BaseInput
            type="number"
            label="Angle (deg)"
            max="360"
            v-model="gradientAngle"
          />
        </div>
      </div>
    </div>

    <GradientSettings />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BaseInput from '@base/BaseInput.vue';
import BaseRadioButton from '@base/BaseRadioButton.vue';
import GradientColorLine from './GradientColorLine.vue';

const rgbColorR = ref(9);
const rgbColorG = ref(9);
const rgbColorB = ref(121);
const rgbColorA = ref(100);
const hexCode = ref('#090979');
const gradientAngle = ref(90);

const gradientType = ref('Radial');

// const gradientResult = computed(() => {
//   return 'bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500';
// });

const rgbInputsMap = [
  {
    id: 1,
    label: 'R',
    model: rgbColorR.value,
  },

  {
    id: 2,
    label: 'G',
    model: rgbColorG.value,
  },

  {
    id: 3,
    label: 'B',
    model: rgbColorB.value,
  },

  {
    id: 4,
    label: 'A',
    model: rgbColorA.value,
  },
];
</script>
