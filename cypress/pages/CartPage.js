class CartPage {

    accessCart() {
        cy.contains("Cart").click();
    }

    validateProductInCart() {
        cy.get(".cart_description")
            .should("be.visible");
    }

}

module.exports = new CartPage();