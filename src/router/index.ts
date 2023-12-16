import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/helpers/",
      name: "HelperView",
      meta: { title: "Helpers" },
      component: () => import("../views/HelperView.vue"),
      children: [
        {
          path: "grid-builder",
          component: () => import("../components/grid-builder/GridBuilder.vue"),
          meta: {
            title: "Grid Builder",
            description: `Grid Builder allows you to create cards, shop products etc. layout using only one css property
          without any media
          queries! Check it out`
          }
        },

        {
          path: "px-to-rem-converter",
          component: () =>
            import("../components/rem-converter/REMConverter.vue"),
          meta: {
            title: "PX to REM converter",
            description: `Easily convert pixels to rems!`
          }
        },

        {
          path: "clamp-calculator",
          component: () =>
            import("../components/clamp-calculator/ClampCalculator.vue"),
          meta: {
            title: "CSS Clamp Calculator",
            description:
              "Easilty calculate css clamp function to make your application responsive without any additional media queries!"
          }
        },

        {
          path: "minifier",
          component: () => import("../components/minifier/CodeMinifier.vue"),
          meta: {
            title: "Code Minifier",
            description:
              "Easily minify JS, SCSS, CSS, GRAPHQL code in one click! That's it!"
          }
        },

        {
          path: "gradient-generator",
          component: () => import("../components/gradient-generator/GradientGenerator.vue"),
          meta: {
            title: "Gradient Generator",
            description:
              "Generate your wonderful gradient in few clicks!"
          }
        },

        {
          path: "font-face-generator",
          component: () => import("../components/font-face-generator/FontFaceGenerator.vue"),
          meta: {
            title: "Font-Face Generator",
            description:
              "Get rid of the tedious manual prescribing of Font Face and do everything in two clicks (or maybe more than two)"
          }
        },

        {
          path: "transform-generator",
          component: () => import("../components/transform-generator/TransformGenerator.vue"),
          meta: {
            title: "Transform Generator",
            description:
              "I don't know what to say. Transform generator :p"
          }
        },

        {
          path: "performance-report",
          component: () => import("../components/performance-report/PerformanceReport.vue"),
          meta: {
            title: "Performance Report",
            description:
              "Test your website performance based on Pagespeed or GTMetrix"
          }
        },
      ]
    }
  ]
});

export default router;
