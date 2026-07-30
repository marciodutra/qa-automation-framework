const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const loginPage = require("../../pages/LoginPage");

Given("que o usuário está na página inicial", () => {
  cy.accessApplication();
});

When("clicar no menu Signup \\/ Login", () => {
  loginPage.accessLoginPage();
});

Then("a tela de login deverá ser exibida", () => {
  loginPage.validateLoginPage();
});