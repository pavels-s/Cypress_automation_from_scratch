/// <reference types="Cypress" />


describe('My new Test Suite', function() {

    //Runs once before all tests
    before(function() {
        

    })

    it('My new Test Case', function() { 

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(1) > .form-control').type("Bob")
        cy.get('select').select("Male")

    })

})