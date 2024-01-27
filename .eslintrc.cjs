/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    '@vue/eslint-config-airbnb'
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    node: true,
  },


  rules: {
    "import/no-unresolved": [
      2,
      { "caseSensitive": false }
    ]
  }
};
