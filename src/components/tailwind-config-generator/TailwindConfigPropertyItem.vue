<template>
  <div>
    <div class="flex justify-between items-center gap-x-2">
      <h4>{{ property.title }}</h4>

      <button
        class="group p-2 transition-opacity hover:opacity-50"
        type="button"
        aria-label="Delete Property Item"
        @click="deletePropertyItem"
      >
        <TrashcanOutline fill-color="#42b883" />
      </button>
    </div>

    <div class="grid gap-2">
      <BaseInput v-model="title" placeholder="Name..." />

      <label>
        <textarea
          class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[100px] transition focus:outline-none focus:border-primary p-2 custom-scrollbar"
          placeholder="Value..."
          v-model="value"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

import TrashcanOutline from 'vue-material-design-icons/TrashcanOutline.vue';
import BaseInput from '@base/BaseInput.vue';

const title = defineModel('title', { required: true });
const value = defineModel('value', { required: true });

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  id: {
    type: Number,
    required: true,
  },

  property: {
    type: Object,
    required: true,
  },

  value: {
    type: String,
    required: true,
  },
});

const { id, property } = toRefs(props);

const emits = defineEmits(['onPropertyItemDelete']);

const deletePropertyItem = () => {
  emits('onPropertyItemDelete', id.value, property.value);
};
</script>

<style lang="scss" scoped></style>
