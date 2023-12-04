<template>
 <label class="relative flex items-center cursor-pointer">
  <input type="checkbox" class="appearance-none peer" v-model="model" :value="value">
  <span class="w-[20px] h-[20px] block bg-dark border relative border-text-secondary checked:bg-primary before:content-[''] before:w-[12px] before:h-[12px] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-primary mr-2 before:opacity-0 peer-checked:before:opacity-100 before:transition rounded-sm before:rounded-sm"></span>

  <span>{{ label }}</span>
 </label>
</template>

<script setup>
import { computed } from "vue";


const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object, String] },
  label: { type: String },
});



const emit = defineEmits(["update:modelValue"]);


const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

</script>

<style lang="scss" scoped></style>