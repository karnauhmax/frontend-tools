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
      <TailwindConfigPropertyItem
        v-for="item in property.items"
        :key="item.id"
        :id="item.id"
        :property="property"
        v-model:title="item.title"
        v-model:value="item.value"
        v-model:selected-unit="property.selectedUnit"
        @on-property-item-delete="deletePropertyItem"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import BaseSelect from '@base/BaseSelect.vue';
import BaseButton from '@base/BaseButton.vue';
import TailwindConfigPropertyItem from './TailwindConfigPropertyItem.vue';

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

  id: {
    type: Number,
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

const deletePropertyItem = (itemId, property) => {
  emits('onPropertyItemDelete', itemId, property);
};
</script>

<style lang="scss" scoped></style>
