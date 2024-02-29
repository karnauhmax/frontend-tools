<template>
  <label class="relative pl-[18px] cursor-pointer">
    <input
      class="appearance-none peer"
      type="radio"
      @change="changeHandler"
      v-bind="$attrs"
    />
    <span class="radio-container"></span>
    {{ label }}
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    default: ''
  },

  label: {
    type: [String, Number],
    required: true
  }
});

defineOptions({
  inheritAttrs: false
});

const emits = defineEmits(['change', 'update:modelValue']);

const changeHandler = (event) => {
  emits('update:modelValue', event.target.value);
  emits('change');
};
</script>
