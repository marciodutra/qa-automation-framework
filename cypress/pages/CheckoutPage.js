class CheckoutPage {

    proceedToCheckout() {
        cy.contains("Proceed To Checkout")
            .click();
    }

    validateCheckoutPage() {
        cy.url()
            .should("include", "/checkout");

        cy.contains("Address Details")
            .should("exist");

        cy.contains("Review Your Order")
            .should("exist");
    }

}

module.exports = new CheckoutPage();