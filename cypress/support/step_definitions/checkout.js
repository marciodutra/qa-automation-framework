const {
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const checkoutPage = require("../../pages/CheckoutPage");


When("prosseguir para checkout", () => {
    checkoutPage.proceedToCheckout();
});


Then("deverá visualizar a página de checkout", () => {
    checkoutPage.validateCheckoutPage();
});