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

  validateAccountCreated() {
    cy.contains("ACCOUNT CREATED!").should("be.visible");
  }
}

module.exports = new RegisterPage();