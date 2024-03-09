<template>
  <div class="generator">
    <div class="mb-4 grid gap-y-4">
      <h2 class="text-2xl">Select a category</h2>
      <BaseSelect v-model="selectedCategory" :options="options" />

      <template
        v-for="{ id, title, cssProperties, propertiesNames } in properties"
        :key="id"
      >
        <TailwindConfigSection
          :title="title"
          :properties="cssProperties"
          :properties-names="propertiesNames"
          :id="id"
          v-show="selectedCategory === title"
          @on-property-created="handleNewProperty"
          @on-property-item-delete="removePropertyItem"
        />
      </template>
    </div>

    <BaseResult :content-to-copy="resultMarkup">
      <pre>{{ resultMarkup }}</pre>
    </BaseResult>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseSelect from '@base/BaseSelect.vue';
import BaseCopyBtn from '@base/BaseCopyBtn.vue';
import BaseResult from '@base/BaseResult.vue';
import TailwindConfigSection from './TailwindConfigGeneratorSection.vue';

import propertiesStorage from './properties/properties';

const properties = ref([...propertiesStorage]);

const PropertyTypes = {
  EFFECTS: 'Effects',
  GRID: 'Grid',
  SPACING: 'Spacing',
  FLEX: 'Flex',
  BACKGROUND: 'Background',
  SIZES: 'Sizes',
  BORDER_OUTLINE: 'Border/Outline',
  COLORS: 'Colors',
  TYPOGRAPHY: 'Typography',
};

const selectedCategory = ref(PropertyTypes.EFFECTS);

const options = ref(Object.values(PropertyTypes));

const resultList = computed(() => {
  return properties.value
    .map((property) => {
      const cssProperties = property.cssProperties
        .map((cssProperty) => generateCssItems(cssProperty))
        .join('');

      return cssProperties;
    })
    .join('');
});

const resultMarkup = computed(() => {
  return `/** @type {import('tailwindcss').Config} */
export default {
  "theme": {
    extend: {${resultList.value}}
  },
  "variants": {},
  "plugins": []
};`;
});

const generateCssItems = (cssProperty) => {
  const cssItems = cssProperty.items
    .filter((item) => item.title && item.value)
    .map((item) => `"${item.title}": "${item.value}" ,`)
    .join('\n          ');

  return cssItems
    ? `
        ${cssProperty.value}: {
          ${cssItems}
        },
      `
    : '';
};

const createNewPropertyItem = (propertyToPush) => {
  propertyToPush.items.push({
    id: Date.now(),
    title: '',
    value: '',
  });
};

const removePropertyItem = (itemId, property) => {
  const indexToDelete = property.items.findIndex((item) => item.id === itemId);
  if (indexToDelete !== -1) {
    property.items.splice(indexToDelete, 1);
  }
};

const handleNewProperty = (propertyName) => {
  properties.value.forEach((property) => {
    const foundProperty = property.cssProperties.find(
      (item) => item.value === propertyName
    );

    if (foundProperty) {
      createNewPropertyItem(foundProperty);
    }
  });
};
</script>

<style lang="scss" scoped></style>
