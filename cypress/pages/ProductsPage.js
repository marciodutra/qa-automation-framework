class ProductsPage {

    validateProductsSection() {
        cy.contains("Products")
            .should("be.visible");
    }

    validateProductsList() {
        cy.get(".product-image-wrapper")
            .should("have.length.greaterThan", 0);
    }

    addFirstProductToCart() {
        cy.get(".product-image-wrapper")
            .first()
            .contains("Add to cart")
            .click();
    }

    validateProductAddedToCart() {
        cy.contains("Added!")
            .should("be.visible");
    }

}

module.exports = new ProductsPage();