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
    <label>
      <textarea
        class="bg-dark border border-text-secondary/10 resize-none w-full min-h-[300px] transition focus:outline-none focus:border-primary p-4 custom-scrollbar"
        v-html="resultMarkup"
      />
    </label>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseSelect from '@base/BaseSelect.vue';
import TailwindConfigSection from './TailwindConfigGeneratorSection.vue';

const properties = ref([
  {
    id: 1,
    title: 'Effects',
    propertiesNames: ['boxShadow', 'opacity'],
    cssProperties: [
      {
        id: 1,
        title: 'Box Shadow',
        value: 'boxShadow',
        units: null,
        items: [],
      },

      {
        id: 2,
        title: 'Opacity',
        value: 'opacity',
        units: null,
        items: [],
      },
    ],
  },

  {
    id: 2,
    title: 'Grid',
    propertiesNames: ['gridTemplateColumns', 'gridTemplateRows'],
    cssProperties: [
      {
        id: 1,
        title: 'Grid Template Columns',
        value: 'gridTemplateColumns',
        units: null,
        items: [],
      },

      {
        id: 2,
        title: 'Grid Template Rows',
        value: 'gridTemplateRows',
        units: null,
        items: [],
      },
    ],
  },

  {
    id: 3,
    title: 'Spacing',
    propertiesNames: ['padding'],
    cssProperties: [
      {
        id: 23,
        title: 'Padding',
        value: 'padding',
        units: ['px', 'rem', 'vw', '%', 'vh'],
        selectedUnit: 'px',
        items: [
          {
            id: 1,
            title: 'AZAZ',
            value: '10px',
          },
        ],
      },
    ],
  },
]);

const selectedCategory = ref('Effects');

const options = ref([
  'Effects',
  'Grid',
  'Flex',
  'Spacing',
  'Typography',
  'Sizes',
]);

const resultList = computed(() =>
  properties.value
    .map((property) => {
      const cssProperties = property.cssProperties
        .map((cssProperty) => {
          if (!cssProperty.items.length) return;

          const filteredItems = cssProperty.items.filter((item) => item);

          const cssItems = filteredItems.map((cssItem) => {
            if (!cssItem.title || !cssItem.value) return;

            return `${cssItem.title}: "${cssItem.value}" ,`;
          });

          return `
        ${cssProperty.value}: {
          ${cssItems.join('\n          ')}
        },
      `;
        })
        .join('');

      return cssProperties;
    })
    .join('')
);

const resultMarkup = computed(() => {
  return `
/** @type {import('tailwindcss').Config} */
export default {
  "theme": {
    extend: {${resultList.value}}
  },
  "variants": {},
  "plugins": []
};`;
});

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
