const {
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const productsPage = require("../../pages/ProductsPage");


When("acessar o carrinho", () => {
    cy.contains("Cart").click();
});


Then("deverá visualizar o produto no carrinho", () => {
    cy.get(".cart_info")
        .should("be.visible");
});