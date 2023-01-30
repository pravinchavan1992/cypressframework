
class ProductListing {
    getProduct(product) {
        return cy.contains(product);
    }
}

export default ProductListing;