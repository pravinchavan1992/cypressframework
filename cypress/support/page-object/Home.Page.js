class HomePage {

    getCategories(){
        cy.intercept('GET', '/app/views/home-page.html').as('homePage')
        cy.wait('@homePage')
       return cy.get('.shop_now');
    }
}

export default HomePage