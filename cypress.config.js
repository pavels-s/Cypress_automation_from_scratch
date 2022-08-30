const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 10000,
    "env": {
    url: "https://rahulshettyacademy.com/"
    }
  },
});
