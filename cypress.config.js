const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    reporter: 'json',
    reporterOptions: {
      output: 'cypress',
      outputFile: 'result.json',
    },
  },
});
