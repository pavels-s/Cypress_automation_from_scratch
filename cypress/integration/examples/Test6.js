/// <reference types="Cypress" />

describe('My new Test Suite', function() {

    it('My new Test Case', function() {

        cy.visit(Cypress.env('url')+"AutomationPractice/")

        //Using invoke cuz show is a jquery method. 
        cy.get('div.mouse-hover-content').invoke('show')
        //Force is not necessary in that case, because we showed hidden elements before
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')


        cy.get('#opentab').then(function(el) {

            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })

    })
})