class LoginPage {
    accessLoginPage() {
        cy.contains("Signup / Login").click();
    }

    validateLoginPage() {
        cy.url().should("include", "/login");
    }

    fillLoginEmail(email) {
        cy.get('[data-qa="login-email"]').type(email);
    }

    fillLoginPassword(password) {
        cy.get('[data-qa="login-password"]').type(password);
    }

    clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
    }

    clickLogout() {
        cy.contains("Logout").click();
    }

    validateLoggedUser(name) {
        cy.contains(`Logged in as ${name}`).should("be.visible");
    }

    login(email, password) {

        this.fillLoginEmail(email);

        this.fillLoginPassword(password);

        this.clickLoginButton();

    }
}

module.exports = new LoginPage();