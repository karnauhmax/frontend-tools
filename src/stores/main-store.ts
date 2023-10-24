import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", () => {
  const previewItems = ref([
    {
      id: 1,
      title: "PX to REM converter",
      description: "Easily convert pixel units to rem units",
      url: "px-to-rem-converter"
    },
    {
      id: 2,
      title: "Cards builder with CSS GRID",
      description:
        "Build cards layout using css grid and make it fully responsive. Without any media queries. ",
      url: "grid-builder"
    },

    {
      id: 3,
      title: "CSS Clamp Calculator",
      description:
        "Build cards layout using css grid and make it fully responsive. Without any media queries. ",
      url: "clamp-calculator"
    },

    {
      id: 4,
      title: "Code Minifier",
      description: "Easily minify JS, CSS, SCSS, GRAPHQL code in one click",
      url: "minifier"
    }
  ]);

  return { previewItems };
});
