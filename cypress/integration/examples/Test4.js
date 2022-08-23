/// <reference types="Cypress" />

describe('My second Test Suite', function() {

    it('My fresh Test Case', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert (Cypress automaticly closes the alerts and pop-ups)
        cy.on('window:alert',(str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //open page and remove target
        cy.get('#opentab').invoke('removeAttr','target').click()

        //Grabbing the url you are currently 
        cy.url().should('include','rahulshettyacademy')

        //Moving to the previous page
        cy.go('back')

    })

})