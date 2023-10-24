<template>
 <button @click="clickHandler"
  class="border-2 border-primary bg-primary text-dark px-2 py-2 rounded-md min-w-[150px] inline-flex items-center justify-center hover:bg-dark hover:text-white transition">
  <span class="font-medium" v-if="label">{{ label }}</span>
 </button>
</template>

<script setup>

const emits = defineEmits(['click']);

const props = defineProps({
 label: {
  type: [String, Boolean],
  default: false
 }
})

const clickHandler = () => {
 emits('click');
}

</script>

<style lang="scss" scoped></style>
