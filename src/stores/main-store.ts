import { ref } from "vue";
import { defineStore } from "pinia";
import { getPageSpeedReport } from "../services/api.js";

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
    },

    {
      id: 5,
      title: "Gradient Generator",
      description: "Generate Wonderful Gradients",
      url: "gradient-generator"
    },

    {
      id: 6,
      title: "Font-Face Generator",
      description: "Generate Font-Face easily",
      url: "font-face-generator"
    },

    {
      id: 7,
      title: "Transform Generator",
      description: "Generate Transform easily",
      url: "transform-generator"
    },

    {
      id: 8,
      title: "Test Performance Report",
      description: "Test your website's application performance",
      url: "performance-report"
    },

    {
      id: 9,
      title: "CSS Utils Generator",
      description: "Generate CSS Utils easily",
      url: "css-utils-generator"
    },

    {
      id: 10,
      title: "Tailwind Config Generator",
      description: "Let's be honest, noone likes to create tailwind config manually ",
      url: "tailwind-config-generator"
    }
  ]);

  const pageSpeedReport = ref({});

  //minify data

  const minifyOptions = ref([
    {
      title: "HTML",
      value: "html",
      checked: false
    },

    {
      title: "JavaScript",
      value: "js",
      checked: true
    },
    {
      title: "CSS",
      value: "css",
      checked: false
    },

    {
      title: "SCSS",
      value: "scss",
      checked: false
    }
  ]);

  const minifyHtml = (input: string) => {
    const minifiedValue = input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .replace(/>\s+</g, "><");

    return minifiedValue;
  };

  const minifyCss = (input: string) => {
    const minifiedValue = input
      .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
      .replace(/;}/g, "}")
      .replace(/\/\*.*?\*\//g, "");

    return minifiedValue;
  };

  const minifyJavaScript = (input: string) => {
    let minifiedValue = input.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

    minifiedValue = minifiedValue.replace(/\s+/g, " ");

    return minifiedValue;
  };

  const generatePageSpeedReport = async (url: string, device: string) => {
    const data = await getPageSpeedReport(url, device);

    pageSpeedReport.value = data;
  };

  return {
    previewItems,
    minifyJavaScript,
    minifyCss,
    minifyHtml,
    minifyOptions,
    generatePageSpeedReport,
    pageSpeedReport
  };
});
