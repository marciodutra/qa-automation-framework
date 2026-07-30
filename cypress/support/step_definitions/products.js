const {
    Then,
    When,
} = require("@badeball/cypress-cucumber-preprocessor");

const productsPage = require("../../pages/ProductsPage");


Then("deverá visualizar a lista de produtos", () => {
    productsPage.validateProductsSection();
    productsPage.validateProductsList();
});


When("adicionar um produto ao carrinho", () => {
    productsPage.addFirstProductToCart();
});