<template>
  <button
    @click="clickHandler"
    class="border-2 border-primary bg-primary text-dark px-2 py-2 rounded-md min-w-[150px] inline-flex items-center justify-center transition-colors duration-300 hover:bg-dark hover:text-white"
    :disabled="disabled"
  >
    <span class="font-medium" v-if="label">{{ label }}</span>
  </button>
</template>

<script setup>
const emits = defineEmits(["click"]);

const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }
});

const clickHandler = () => {
  emits("click");
};
</script>
