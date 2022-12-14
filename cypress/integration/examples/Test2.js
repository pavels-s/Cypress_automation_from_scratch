/// <reference types="Cypress" />

describe('My second Test Suite', function() {

    it('My updated Test Case', function() {
        
        cy.visit(Cypress.env('url')+"seleniumPractise/#/")

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.products').as('productLocator')
    
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {

                cy.wrap($el).find('button').click()
            }
        })

        //Proceed to checkout
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()





    })




})