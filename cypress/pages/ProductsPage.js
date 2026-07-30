class ProductsPage {

    validateProductsSection() {
        cy.contains("Products")
            .should("be.visible");
    }

    validateProductsList() {
        cy.get(".product-image-wrapper")
            .should("have.length.greaterThan", 0);
    }

}

module.exports = new ProductsPage();