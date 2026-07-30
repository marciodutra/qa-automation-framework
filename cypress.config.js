const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  mochawesome(on);

  return config;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
  reportDir: "cypress/reports",
  overwrite: false,
  html: false,
  json: true,

  reportTitle: "QA Automation Framework",
  reportPageTitle: "QA Automation Framework",
  embeddedScreenshots: true,
  inlineAssets: true,
  charts: true,
  saveAllAttempts: false
},

  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents,
  },
});