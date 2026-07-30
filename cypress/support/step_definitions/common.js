const {
  Given,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário está na página inicial", () => {
  cy.accessApplication();
});