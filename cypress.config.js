// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default;
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', cucumber());
//     },
//     specPattern: "cypress/e2e/Features/*.feature",
//   },
// });


const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Attach Allure plugin
      allureWriter(on, config);

      // Cucumber preprocessor
      on('file:preprocessor', cucumber());

      return config;
    },
    specPattern: 'cypress/e2e/Features/*.feature',
    env: {
      allure: true, // Enable Allure reporting
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 2000
    }
  }
});