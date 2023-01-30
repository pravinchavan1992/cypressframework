import NavBarPage from "../support/page-object/NavBar.Page"
import CartPage from "../support/page-object/Cart.Page"
import OrderDetails from "../support/page-object/Order.Details.Page"

describe('Buy a product', ()=>{
    let productData
    let profile
    const navBar =  new NavBarPage();
    const cartPage = new CartPage();
    const orderDetailsPage = new OrderDetails();

    before(() => {
        cy.fixture('productDetails').then(data => {
            productData = data
        })

        cy.fixture('profile').then(data=>{
            profile = data
        })
    })

    it('Purchase a product - smoke', ()=>{
       cy.visit('/')
       cy.selectCategory(productData.productCategories.speakers)
       cy.addToCart(productData.productname)
       cy.clicksOn(navBar.cartNavLink())
       cy.clicksOn(cartPage.checkoutButton())
       cy.get('#toolTipCart').should('not.be.visible')
       orderDetailsPage.totalAmmount().should('have.text', productData.price)
       cy.loginToApp(profile)

    })
})