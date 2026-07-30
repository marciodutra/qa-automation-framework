const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário está na página inicial", () => {
  cy.visit("/");
});

When("clicar no menu Signup \\/ Login", () => {
  cy.contains("Signup / Login").click();
});

Then("a tela de login deverá ser exibida", () => {
  cy.url().should("include", "/login");
});