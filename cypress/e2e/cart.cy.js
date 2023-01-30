import HomePage from "../support/page-object/Home.Page"

describe('Testing cart', () => {
    let productData;
    before(() => {
        cy.fixture('productDetails').then(data => {
            productData = data;
        })
    })

    const homePage = new HomePage();
    it('Adding product to cart', () => {
        cy.visit('/')
        cy.selectCategory(productData.productCategories.speakers)

        productData.addToCartProducts.forEach(product => {
            cy.addToCart(product)
            cy.go('back')
        })

    })
})