<template>
  <label class="relative flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="appearance-none peer"
      v-model="model"
      :value="value"
    />
    <span class="checkbox-container" />
    <span>{{ label }}</span>
  </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object, String] },
  label: { type: String }
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});
</script>
