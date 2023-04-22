module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  moduleFileExtensions: ["js", "vue", "json"],
  // modulePaths: ["<rootDir>/components", "<rootDir>/layouts", "<rootDir>/pages"],
  modulePaths: [],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/layouts/**/*.vue",
    "<rootDir>/modules/**/*.js",
    "<rootDir>/plugins/**/*.js"
  ],
  testEnvironment: "jsdom",
  verbose: true,
  transformIgnorePatterns: [
    "node_modules/(?!(@nuxtjs/i18n)/)",
    "node_modules/(?!(@nuxtjs/style-resources)/)",
    "node_modules/(?!(nuxt-i18n)/)",
    "node_modules/(?!(vuelidate)/)"
  ],
  preset: "@nuxt/test-utils",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"]
  }
};
