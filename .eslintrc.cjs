module.exports = {
  env: { browser: true, node: true },
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
    // "project": ["./tsconfig.json"]
  },
  root: true,
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-console": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off"
  },
  globals: {
    useAuth: true,
    useFetch: true,
    useRuntimeConfig: true
  },
  ignorePatterns: ["assets/**/vendor"]
};
