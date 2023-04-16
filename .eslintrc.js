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
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier", "plugin:prettier/recommended"],
  plugins: ["jest"],
  // add your custom rules here
  rules: {
    // "import/no-named-as-default": "off",
    // "import/no-named-as-default-member": "off",
    "vue/no-unused-components": "off",
    "vue/no-mutating-props": "off",
    "vue/require-component-is": "off",
    "no-unreachable": "warn",
    "no-lonely-if": "warn",
    "no-console": "off"
  },
  reportUnusedDisableDirectives: true
};
