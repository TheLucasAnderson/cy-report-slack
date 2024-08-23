const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      reportFilename: 'results',
      overwrite: false,
      html: false,
      json: true
    },
  },
});
