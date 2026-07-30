class LoginPage {
  accessLoginPage() {
    cy.contains("Signup / Login").click();
  }

  fillEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  fillPassword(password) {
    cy.get('[data-qa="login-password"]').type(password);
  }

  submitLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  validateLoginPage() {
    cy.url().should("include", "/login");
  }
}

module.exports = new LoginPage();