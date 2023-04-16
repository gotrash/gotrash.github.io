module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  moduleFileExtensions: ["js", "vue", "json"],
  modulePaths: ["<rootDir>/components", "<rootDir>/layouts", "<rootDir>/pages"],
  // modulePathIgnorePatterns: ["<rootDir>/pages/debug/"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.scss$": "<rootDir>/node_modules/jest-scss-transform",
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/global/**/*.vue", "<rootDir>/utils/**/*.js"],
  testEnvironment: "jsdom",
  verbose: true,
  transformIgnorePatterns: ["node_modules/(?!(nuxt-i18n)/)", "node_modules/(?!(nuxt-test-utils)/)"],
  preset: "@nuxt/test-utils"
};
