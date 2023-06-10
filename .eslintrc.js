module.exports = {
  root: true,
  env: {
    browser: true,
    "jest/globals": true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: ["jest"],
  // add your custom rules here
  rules: {
    // "import/no-named-as-default": "off",
    // "import/no-named-as-default-member": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-components": "off",
    "vue/no-mutating-props": "off",
    "vue/no-v-html": "off",
    "vue/require-component-is": "off",
    "no-unreachable": "warn",
    "no-lonely-if": "warn",
    "no-console": "off"
  },
  reportUnusedDisableDirectives: true
};
