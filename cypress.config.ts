import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      allureCypress(on, config, {
        resultsDir: "cypress/reports/allure-results",
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },
  video: true,
  videosFolder: "cypress/reports/videos",
  screenshotsFolder: "cypress/reports/screenshots",
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 8000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
});
