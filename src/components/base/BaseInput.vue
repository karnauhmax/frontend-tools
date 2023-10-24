<template>
  <label class="grid gap-y-2 justify-items-start">
    <p v-if="label">{{ label }}</p>

    <input
      class="text-secondary w-full bg-dark border p-2 focus:outline-none focus:border2 focus:border-primary pr-8"
      :class="{
        'border-red-500/100': !isValid,
        'border-text-secondary': isValid
      }"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      v-bind="$attrs"
    />

    <span
      v-if="units"
      class="absolute text-sm text-text-secondary right-[10px] top-[57%]"
      >{{ units }}</span
    >

    <p v-if="!isValid && errorMessage" class="text-sm text-red-500">
      {{ errorMessage }}
    </p>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number]
  },

  label: {
    type: [Boolean, String],
    default: false
  },

  isValid: {
    type: Boolean,
    default: true
  },

  errorMessage: {
    type: [String, Boolean],
    default: false
  },

  units: {
    type: [String, Boolean],
    default: false
  }
});

const emits = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
