<template>
  <div ref="target" :class="`relative select border border-primary grid`">
    <button
      type="button"
      @click="toggleSelect"
      :class="`text-start px-3 py-4 select__option`"
    >
      {{ modelValue }}
    </button>

    <ul
      :class="`grid max-h-[350px] overflow-y-auto custom-scrollbar absolute w-full ${conditionalListClass} transition-[opacity_visibility] border  border-primary bg-dark top-[60px] z-10`"
    >
      <li
        class="[&:not(:last-child)]:border-b border-primary"
        v-for="(option, index) in optionsWithoutSelected"
        :key="option"
      >
        <button
          class="w-full hover:bg-primary duration-200 transition-colors hover:text-black py-4 px-3 text-start"
          type="button"
          @click="handleSelectChange(option, index)"
        >
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';

const emits = defineEmits(['update:modelValue']);

const conditionalListClass = computed(() =>
  isOpened.value ? 'opacity-1 visible' : 'opacity-0 invisible'
);

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },

  modelValue: {
    type: String,
    required: true,
  },
});

const selected = ref(props.options[0]);
const selectedIndex = ref(0);

const optionsWithoutSelected = computed(() =>
  [...props.options].filter((option) => {
    return option !== selected.value;
  })
);

const target = ref(null);

const isOpened = ref(false);

const toggleSelect = () => {
  isOpened.value = !isOpened.value;
};

const handleSelectChange = (option, index) => {
  isOpened.value = false;
  selected.value = option;
  emits('update:modelValue', option);
  selectedIndex.value = index;
};

onClickOutside(target, () => {
  isOpened.value = false;
});
</script>

<style lang="scss" scoped></style>
