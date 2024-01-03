<template>
  <label class="relative pl-[18px] cursor-pointer">
    <input
      class="appearance-none peer"
      type="radio"
      @change="changeHandler"
      v-bind="$attrs"
    />
    <span
      class="radio w-[16px] h-[16px] left-0 top-2/4 -translate-y-1/2 rounded-full bg-dark border border-text-secondary absolute before:content-[''] before:w-[8px] before:h-[8px] before:absolute before:bg-primary before:opacity-0 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 peer-checked:before:opacity-100 before:transition-opacity"
    ></span>
    {{ label }}
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    default: ""
  },

  label: {
    type: [String, Number],
    required: true
  }
});

defineOptions({
  inheritAttrs: false
});

const emits = defineEmits(["change", "update:modelValue"]);

const changeHandler = (event) => {
  emits("update:modelValue", event.target.value);
  emits("change");
};
</script>
