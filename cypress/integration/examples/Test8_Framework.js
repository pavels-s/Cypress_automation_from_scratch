/// <reference types="Cypress" />


describe('My new Test Suite', function() {

    //Runs once before all tests
    before(function() {
        cy.fixture('example').then(function(data) {
            //second variable cant access outside (there are 2 different data variables), so we are initializing global variable
            this.data = data
        })
    })

    it('My new Test Case', function() { 

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //Checking second textbox if name dublicated
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)

        //Checking min lenght 2 characters. ('have.minlength' doesnt work because it is not jquery) - another way how to do it find in Test7.js
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        
        //Checking if radio is disabled
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get('a[href="/angularpractice/shop"]').click()

        //Searching Blackberry and adding it to cart through the commands.js
        cy.selectProduct('Blackberry')



    })

})