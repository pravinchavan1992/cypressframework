// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import HomePage from "../support/page-object/Home.Page"
import ProductDetailsPage from "../support/page-object/Product.Details.Page"
import ProductListingPage from "../support/page-object/Product.Listing.Page"
import OrderDetailsPage from "../support/page-object/Order.Details.Page"

Cypress.Commands.add('selectCategory', (category)=>{
    new HomePage().getCategories().contains(category).click();
})

Cypress.Commands.add('addToCart', (product)=>{
    new ProductListingPage().getProduct(product).click();
    new ProductDetailsPage().addToCart().click();   
})

Cypress.Commands.add('clicksOn', (element)=>{
    element.click();
})

Cypress.Commands.add('loginToApp', ({username, password})=>{
    const orderDetailsPage = new OrderDetailsPage();
    orderDetailsPage.getUsername().type(username)
    orderDetailsPage.getPassword().type(password)
    cy.clicksOn(orderDetailsPage.getLoginBtn())
})