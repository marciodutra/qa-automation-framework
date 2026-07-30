const {
  Given,
} = require("@badeball/cypress-cucumber-preprocessor");

const loginPage = require("../../pages/LoginPage");


Given("que o usuário está na página inicial", () => {
  cy.accessApplication();
});


Given("que o usuário está logado", () => {

  cy.fixture("users").then((user) => {

    cy.accessApplication();

    loginPage.accessLoginPage();

    loginPage.login(
      user.newUser.email,
      user.newUser.password
    );

    loginPage.validateLoggedUser(
      user.newUser.name
    );

  });

});

Given("que o usuário está logado", () => {

  cy.fixture("users").then((user) => {

    cy.accessApplication();

    loginPage.accessLoginPage();

    loginPage.login(
      user.loginUser.email,
      user.loginUser.password
    );

    loginPage.validateLoggedUser(
      user.loginUser.name
    );

  });

});

Given("que o usuário está logado", () => {

  cy.accessApplication();

  cy.fixture("users").then((user) => {

    const email = `qa_${Date.now()}@test.com`;

    cy.wrap({
      name: user.newUser.name,
      email: email,
      password: user.newUser.password
    }).as("createdUser");

  });

});