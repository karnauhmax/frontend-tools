<template>
  <div class="grid gap-y-5">
    <h3 class="text-xl">{{ title }}</h3>
    <BaseSelect v-model="selectedCategory" :options="propertiesNames" />
    <BaseButton
      @click="addProperty"
      class="max-w-[250px]"
      label="Add property"
    />

    <template v-for="property in properties" :key="property.id">
      <div v-for="item in property.items" :key="item.id" class="grid gap-y-4">
        <div class="flex justify-between items-center gap-x-2">
          <h4>{{ property.title }}</h4>

          <button
            class="group p-2 transition-opacity hover:opacity-50"
            type="button"
            aria-label="Delete Property Item"
            @click="deletePropertyItem(item.id, property)"
          >
            <TrashcanOutline fill-color="#42b883" />
          </button>
        </div>

        <div class="grid grid-cols-[2fr_1fr_1fr] gap-2">
          <BaseInput v-model="item.title" placeholder="Name..." />
          <BaseSelect
            v-if="property.units"
            v-model="property.selectedUnit"
            :options="property.units"
          />

          <BaseButton
            @click="addPropertyItem(item.title, item.value)"
            label="Add"
          />

          <label class="col-span-3">
            <textarea
              class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[100px] transition focus:outline-none focus:border-primary p-2 custom-scrollbar"
              placeholder="Value..."
              v-model="item.value"
            />
          </label>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseSelect from '@base/BaseSelect.vue';
import BaseButton from '@base/BaseButton.vue';
import BaseInput from '@base/BaseInput.vue';
import TrashcanOutline from 'vue-material-design-icons/TrashcanOutline.vue';

const props = defineProps({
  properties: {
    type: Array,
    required: true,
  },

  propertiesNames: {
    type: Array,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
});

const selectedCategory = ref(props.propertiesNames[0]);

const emits = defineEmits([
  'onPropertyCreated',
  'onPropertyItemDelete',
  'onPropertyItemAdded',
]);

const addProperty = () => {
  emits('onPropertyCreated', selectedCategory.value);
};

const addPropertyItem = (title, value) => {
  if (title && value) {
    emits('onPropertyItemAdded', title, value);
  }
};

const deletePropertyItem = (itemId, property) => {
  emits('onPropertyItemDelete', itemId, property);
};
</script>

<style lang="scss" scoped></style>
