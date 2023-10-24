import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/helpers/",
      name: "HelperView",
      meta: { test: "123" },
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
        }
      ]
    }
  ]
});

export default router;
