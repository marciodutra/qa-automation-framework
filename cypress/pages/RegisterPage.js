class RegisterPage {
    accessRegisterPage() {
        cy.contains("Signup / Login").click();
    }

    fillSignupName(name) {
        cy.get('[data-qa="signup-name"]').type(name);
    }

    fillSignupEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email);
    }

    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();
    }

    selectGender() {
        cy.get("#id_gender1").check();
    }

    fillPassword(password) {
        cy.get('[data-qa="password"]').type(password);
    }

    fillFirstName(firstName) {
        cy.get('[data-qa="first_name"]').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('[data-qa="last_name"]').type(lastName);
    }

    fillAddress(address) {
        cy.get('[data-qa="address"]').type(address);
    }

    selectCountry(country) {
        cy.get('[data-qa="country"]').select(country);
    }

    fillState(state) {
        cy.get('[data-qa="state"]').type(state);
    }

    fillCity(city) {
        cy.get('[data-qa="city"]').type(city);
    }

    fillZipcode(zipcode) {
        cy.get('[data-qa="zipcode"]').type(zipcode);
    }

    fillMobile(mobile) {
        cy.get('[data-qa="mobile_number"]').type(mobile);
    }

    selectTitle() {
        cy.get("#id_gender1").check();
    }

    selectBirthDay(day) {
        cy.get('[data-qa="days"]').select(day);
    }

    selectBirthMonth(month) {
        cy.get('[data-qa="months"]').select(month);
    }

    selectBirthYear(year) {
        cy.get('[data-qa="years"]').select(year);
    }

    clickCreateAccount() {
        cy.get('[data-qa="create-account"]')
            .should("be.visible")
            .click();
    }
    validateAccountCreated() {
        cy.url().should("include", "/account_created");

        cy.contains("Account Created!")
            .should("be.visible");
    }

    clickContinue() {
        cy.contains("Continue").click();
    }

    validateLoggedUser(name) {
        cy.contains(`Logged in as ${name}`).should("be.visible");
    }
}

module.exports = new RegisterPage();