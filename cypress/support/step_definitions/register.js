const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const registerPage = require("../../pages/RegisterPage");

let userEmail;


When("acessar a tela de cadastro", () => {
  registerPage.accessRegisterPage();
});

When("preencher os dados iniciais de cadastro", () => {
  cy.fixture("users").then((user) => {
    userEmail = `qa_${Date.now()}@test.com`;

    registerPage.fillSignupName(user.newUser.name);
    registerPage.fillSignupEmail(userEmail);
    registerPage.clickSignupButton();
  });
});

Then("a tela de criação de conta deverá ser exibida", () => {
  cy.url().should("include", "/signup");
});