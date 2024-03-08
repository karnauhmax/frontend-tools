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
        id: 2,
        title: 'Box Shadow',
        value: 'boxShadow',
        items: [],
      },

      {
        id: 3,
        title: 'Opacity',
        value: 'opacity',
        items: [],
      },
    ],
  },

  {
    id: 4,
    title: 'Grid',
    propertiesNames: [
      'gridTemplateColumns',
      'gridTemplateRows',
      'gridAutoRows',
      'gridAutoColumns',
      'gridColumn',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRow',
      'gridRowStart',
      'gridRowEnd',
      'gridArea',
    ],
    cssProperties: [
      {
        id: 5,
        title: 'Grid Template Columns',
        value: 'gridTemplateColumns',
        items: [],
      },

      {
        id: 6,
        title: 'Grid Template Rows',
        value: 'gridTemplateRows',
        items: [],
      },

      {
        id: 7,
        title: 'Grid Auto Rows',
        value: 'gridAutoRows',
        items: [],
      },

      {
        id: 8,
        title: 'Grid Column',
        value: 'gridColumn',
        items: [],
      },

      {
        id: 9,
        title: 'Grid Column Start',
        value: 'gridColumnStart',
        items: [],
      },

      {
        id: 10,
        title: 'Grid Column End',
        value: 'gridColumnEnd',
        items: [],
      },

      {
        id: 11,
        title: 'Grid Row',
        value: 'gridRow',
        items: [],
      },

      {
        id: 12,
        title: 'Grid Row Start',
        value: 'gridRowStart',
        items: [],
      },

      {
        id: 13,
        title: 'Grid Row End',
        value: 'gridRowEnd',
        items: [],
      },

      {
        id: 14,
        title: 'Grid Area',
        value: 'gridArea',
        items: [],
      },

      {
        id: 15,
        title: 'Grid Gap',
        value: 'gridGap',
        items: [],
      },

      {
        id: 16,
        title: 'gridAutoColumns',
        value: 'gridAutoColumns',
        items: [],
      },
    ],
  },

  {
    id: 8,
    title: 'Spacing',
    propertiesNames: [
      'padding',
      'paddingInline',
      'paddingBlock',
      'gap',
      'margin',
    ],
    cssProperties: [
      {
        id: 9123,
        title: 'Padding',
        value: 'padding',
        items: [],
      },

      {
        id: 10123,
        title: 'Padding Block',
        value: 'paddingBlock',
        items: [],
      },

      {
        id: 111231,
        title: 'Padding Inline',
        value: 'paddingInline',
        items: [],
      },

      {
        id: 1212313,
        title: 'Gap',
        value: 'gap',
        items: [],
      },

      {
        id: 13,
        title: 'margin',
        value: 'margin',
        items: [],
      },
    ],
  },

  {
    id: 12,
    title: 'Flex',
    propertiesNames: [
      'flexGrow',
      'flexShrink',
      'flexBasis',
      'flex',
      'flexWrap',
      'flexDirection',
      'flexFlow',
      'justifyContent',
      'alignItems',
      'alignContent',
      'order',
      'alignSelf',
    ],
    cssProperties: [
      {
        id: 13,
        title: 'Flex Grow',
        value: 'flexGrow',
        items: [],
      },

      {
        id: 14,
        title: 'Flex Shrink',
        value: 'flexShrink',
        items: [],
      },

      {
        id: 15,
        title: 'Flex Basis',
        value: 'flexBasis',
        items: [],
      },

      {
        id: 16,
        title: 'Flex',
        value: 'flex',
        items: [],
      },

      {
        id: 17,
        title: 'Flex Wrap',
        value: 'flexWrap',
        items: [],
      },

      {
        id: 18,
        title: 'Flex Direction',
        value: 'flexDirection',
        items: [],
      },

      {
        id: 19,
        title: 'Flex Flow',
        value: 'flexFlow',
        items: [],
      },

      {
        id: 20,
        title: 'Justify Content',
        value: 'justifyContent',
        items: [],
      },
    ],
  },

  {
    id: 45,
    title: 'Background',
    propertiesNames: [
      'backgroundColor',
      'backgroundImage',
      'backgroundSize',
      'backgroundPosition',
      'backgroundRepeat',
      'backgroundOrigin',
      'backgroundClip',
      'backgroundBlendMode',
    ],
    cssProperties: [
      {
        id: 46,
        title: 'Background Color',
        value: 'backgroundColor',
        items: [],
      },

      {
        id: 47,
        title: 'Background Image',
        value: 'backgroundImage',
        items: [],
      },

      {
        id: 48,
        title: 'Background Size',
        value: 'backgroundSize',
        items: [],
      },

      {
        id: 49,
        title: 'Background Position',
        value: 'backgroundPosition',
        items: [],
      },

      {
        id: 50,
        title: 'Background Repeat',
        value: 'backgroundRepeat',
        items: [],
      },

      {
        id: 51,
        title: 'Background Origin',
        value: 'backgroundOrigin',
        items: [],
      },

      {
        id: 52,
        title: 'Background Blend Mode',
        value: 'backgroundBlendMode',
        items: [],
      },
    ],
  },

  {
    id: 85,
    title: 'Sizes',
    propertiesNames: [
      'width',
      'minWidth',
      'maxWidth',
      'height',
      'minHeight',
      'maxHeight',
    ],
    cssProperties: [
      {
        id: 86,
        title: 'Width',
        value: 'width',
        items: [],
      },

      {
        id: 87,
        title: 'Min Width',
        value: 'minWidth',
        items: [],
      },

      {
        id: 88,
        title: 'Max Width',
        value: 'maxWidth',
        items: [],
      },

      {
        id: 89,
        title: 'Height',
        value: 'height',
        items: [],
      },

      {
        id: 90,
        title: 'Min Height',
        value: 'minHeight',
        items: [],
      },

      {
        id: 91,
        title: 'Max Height',
        value: 'maxHeight',
        items: [],
      },
    ],
  },

  {
    id: 4,
    title: 'Border/Outline',
    propertiesNames: [
      'border',
      'border-block',
      'border-inline',
      'borderWidth',
      'borderStyle',
      'borderColor',
      'borderRadius',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
      'outline',
      'outlineWidth',
      'outlineStyle',
      'outlineColor',
    ],

    cssProperties: [
      {
        id: 5,
        title: 'Border',
        value: 'border',
        items: [],
      },

      {
        id: 6,
        title: 'Border Block',
        value: 'borderBlock',
        items: [],
      },

      {
        id: 7,
        title: 'Border Inline',
        value: 'borderInline',
        items: [],
      },

      {
        id: 8,
        title: 'Border Width',
        value: 'borderWidth',
        items: [],
      },

      {
        id: 9,
        title: 'Border Style',
        value: 'borderStyle',
        items: [],
      },

      {
        id: 10,
        title: 'Border Color',
        value: 'borderColor',
        items: [],
      },

      {
        id: 11,
        title: 'Border Radius',
        value: 'borderRadius',
        items: [],
      },

      {
        id: 12,
        title: 'Outline',
        value: 'outline',
        items: [],
      },

      {
        id: 13,
        title: 'Border Top Left Radius',
        value: 'borderTopLeftRadius',
        items: [],
      },

      {
        id: 14,
        title: 'Border Top Right Radius',
        value: 'borderTopRightRadius',
        items: [],
      },

      {
        id: 15,
        title: 'Border Bottom Left Radius',
        value: 'borderBottomLeftRadius',
        items: [],
      },

      {
        id: 16,
        title: 'Border Bottom Right Radius',
        value: 'borderBottomRightRadius',
        items: [],
      },

      {
        id: 17,
        title: 'Border Image',
        value: 'borderImage',
        items: [],
      },
    ],
  },

  {
    id: 18,
    title: 'Colors',
    propertiesNames: ['colors'],
    cssProperties: [
      {
        id: 19,
        title: 'Colors',
        value: 'colors',
        items: [],
      },
    ],
  },

  {
    id: 20,
    title: 'Typography',
    propertiesNames: ['fontSize', 'letterSpacing', 'lineHeight', 'textStroke'],
    cssProperties: [
      {
        id: 22,
        title: 'Font Size',
        value: 'fontSize',
        items: [],
      },

      {
        id: 24,
        title: 'Letter Spacing',
        value: 'letterSpacing',
        items: [],
      },

      {
        id: 25,
        title: 'Line Height',
        value: 'lineHeight',
        items: [],
      },

      {
        id: 26,
        title: 'Text Stroke',
        value: 'textStroke',
        items: [],
      },
    ],
  },
]);

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
