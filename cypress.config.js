const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j9fhio',
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/minha-conta/',
    video: true,
    videosFolder: 'cypress/videos',
    trashAssetsBeforeRuns: true,
  },
});
