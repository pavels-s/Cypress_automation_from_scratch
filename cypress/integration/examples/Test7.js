/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('My new Test Suite', function() {

    it('My new Test Case', function() { 

        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()

    })

})