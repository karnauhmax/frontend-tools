import { createRouter, createWebHashHistory } from 'vue-router';
import { loadLayoutMiddleware } from './layoutMiddleware.ts';

const HomeView = () => import('../views/HomeView.vue');
const HelperView = () => import('../views/HelperView.vue');
const GridBuilder = () => import('../components/grid-builder/GridBuilder.vue');
const REMConverter = () => import('../components/rem-converter/REMConverter.vue');
const ClampCalculator = () => import('../components/clamp-calculator/ClampCalculator.vue');
const CodeMinifier = () => import('../components/minifier/CodeMinifier.vue');
const GradientGenerator = () => import('../components/gradient-generator/GradientGenerator.vue');
const FontFaceGenerator = () => import('../components/font-face-generator/FontFaceGenerator.vue');
const TransformGenerator = () => import('../components/transform-generator/TransformGenerator.vue');
const PerformanceReport = () => import('../components/performance-report/PerformanceReport.vue');
const BaseSidebar = () => import('@base/BaseSidebar.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/grid-builder',
      name: 'GridBuilder',
      component: GridBuilder,
      meta: {
        title: 'Grid Builder',
        description: 'Grid Builder allows you to create cards, shop products etc. layout using only one css property without any media queries! Check it out',
        layout: 'helper',
      },
    },
    {
      path: '/px-to-rem-converter',
      name: 'REMConverter',
      component: REMConverter,
      meta: {
        title: 'PX to REM converter',
        description: 'Easily convert pixels to rems!',
        layout: 'helper',

      },
    },
    {
      path: '/clamp-calculator',
      name: 'ClampCalculator',
      component: ClampCalculator,
      meta: {
        title: 'CSS Clamp Calculator',
        description: 'Easily calculate CSS clamp function to make your application responsive without any additional media queries!',
        layout: 'helper',

      },
    },
    {
      path: '/minifier',
      name: 'CodeMinifier',
      component: CodeMinifier,
      meta: {
        title: 'Code Minifier',
        description: "Easily minify JS, SCSS, CSS, GraphQL code in one click! That's it!",
        layout: 'helper',

      },
    },
    {
      path: '/gradient-generator',
      name: 'GradientGenerator',
      component: GradientGenerator,
      meta: {
        title: 'Gradient Generator',
        description: 'Generate your wonderful gradient in a few clicks!',
        layout: 'helper',

      },
    },
    {
      path: '/font-face-generator',
      name: 'FontFaceGenerator',
      component: FontFaceGenerator,
      meta: {
        title: 'Font-Face Generator',
        description: 'Get rid of the tedious manual prescribing of Font Face and do everything in two clicks (or maybe more than two)',
        layout: 'helper',

      },
    },
    {
      path: '/transform-generator',
      name: 'TransformGenerator',
      component: TransformGenerator,
      meta: {
        title: 'Transform Generator',
        description: "I don't know what to say. Transform generator :p",
        layout: 'helper',
      },
    },
    {
      path: '/performance-report',
      name: 'PerformanceReport',
      component: PerformanceReport,
      meta: {
        title: 'Performance Report',
        description: 'Test your website performance based on Pagespeed or GTMetrix',
        layout: 'helper',
      },
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(loadLayoutMiddleware);

export default router;
