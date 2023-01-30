class ProductDetails {
    addToCart() {
        return cy.get(`button[name="save_to_cart"]`);
    }
}

export default ProductDetails;