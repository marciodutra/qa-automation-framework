const {
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const productsPage = require("../../pages/ProductsPage");


Then("deverá visualizar a lista de produtos", () => {
    productsPage.validateProductsSection();
    productsPage.validateProductsList();
});