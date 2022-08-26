/// <reference types="Cypress" />

describe('My first Test Suite', function() {

    it('My first Test Case', function() {
        
        cy.visit(Cypress.env('url')+"seleniumPractise/#/")

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //FOund only visible .product elements on the page. (there are 5 .products elements on the page with the hidden one)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')
        //Parent child chaining. Getting the form with products and searching .product elements in it (the same search with another strategy)
        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        //The same with css selector (as per lecture it is bad option)
        //cy.get(':nth-child(3) > .product-action > button').click()

        console.log('text printed in devtool console')

    
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {

                cy.wrap($el).find('button').click()
            }
        })

        //Assert if logo is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')



        //Printing in logs
        cy.get('.brand').then(function(logoElement) {
            const logo = cy.log(logoElement.text())
        })
        //Instead of cy.log(logo.text())
        //Not possible to cy.get('.brand').text()

    })




})