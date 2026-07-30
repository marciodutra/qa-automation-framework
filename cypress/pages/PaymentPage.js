class PaymentPage {

    clickPlaceOrder() {
        cy.contains("Place Order")
            .click();
    }


    validatePaymentPage() {
        cy.contains("Payment")
            .should("be.visible");
    }


    fillPaymentData() {

        cy.get('[data-qa="name-on-card"]')
            .type("QA Automation");

        cy.get('[data-qa="card-number"]')
            .type("4111111111111111");

        cy.get('[data-qa="cvc"]')
            .type("311");

        cy.get('[data-qa="expiry-month"]')
            .type("12");

        cy.get('[data-qa="expiry-year"]')
            .type("2030");
    }


    confirmPayment() {

        cy.contains("Pay and Confirm Order")
            .click();

    }


    validateOrderPlaced() {

        cy.contains("Order Placed!")
            .should("be.visible");

    }

}

module.exports = new PaymentPage();