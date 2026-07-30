const {
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const registerPage = require("../../pages/RegisterPage");

When("acessar a tela de cadastro", () => {
    registerPage.accessRegisterPage();
});

When("preencher os dados iniciais de cadastro", () => {
    cy.fixture("users").then((user) => {
        const email = `qa_${Date.now()}@test.com`;

        cy.wrap(email).as("userEmail");

        registerPage.fillSignupName(user.newUser.name);
        registerPage.fillSignupEmail(email);
        registerPage.clickSignupButton();
    });
});

When("preencher os dados da conta", () => {
    cy.fixture("users").then((user) => {
        registerPage.selectGender();

        registerPage.selectBirthDay(user.newUser.birthDay);
        registerPage.selectBirthMonth(user.newUser.birthMonth);
        registerPage.selectBirthYear(user.newUser.birthYear);

        registerPage.fillPassword(user.newUser.password);

        registerPage.fillFirstName(user.newUser.firstName);
        registerPage.fillLastName(user.newUser.lastName);
        registerPage.fillAddress(user.newUser.address);

        registerPage.selectCountry(user.newUser.country);

        registerPage.fillState(user.newUser.state);
        registerPage.fillCity(user.newUser.city);
        registerPage.fillZipcode(user.newUser.zipcode);
        registerPage.fillMobile(user.newUser.mobile);
    });
});

Then("a conta deverá ser criada com sucesso", () => {
    cy.fixture("users").then((user) => {

        registerPage.clickCreateAccount();

        registerPage.validateAccountCreated();

        registerPage.clickContinue();

        registerPage.validateLoggedUser(user.newUser.name);

    });
});