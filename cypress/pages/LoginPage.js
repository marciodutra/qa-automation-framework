class LoginPage {
  accessLoginPage() {
    cy.contains("Signup / Login").click();
  }

  validateLoginPage() {
    cy.url().should("include", "/login");
  }
}

module.exports = new LoginPage();