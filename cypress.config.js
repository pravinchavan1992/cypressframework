const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "projectId": "1234",
    viewportWidth:1536,
    viewportHeight: 960,
    baseUrl: `https://www.advantageonlineshopping.com/#/`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
