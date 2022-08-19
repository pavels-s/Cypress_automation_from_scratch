/// <reference types="Cypress" />

describe('My first Test Suite', function() {

    it('My first Test Case', function() {
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

    })
})