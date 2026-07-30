const {
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");


const paymentPage = require("../../pages/PaymentPage");


When("clicar em Place Order", () => {

    paymentPage.clickPlaceOrder();

});


Then("a tela de pagamento deverá ser exibida", () => {

    paymentPage.validatePaymentPage();

});


When("preencher os dados do pagamento", () => {

    paymentPage.fillPaymentData();

});


When("confirmar o pagamento", () => {

    paymentPage.confirmPayment();

});


Then("o pedido deverá ser finalizado com sucesso", () => {

    paymentPage.validateOrderPlaced();

});