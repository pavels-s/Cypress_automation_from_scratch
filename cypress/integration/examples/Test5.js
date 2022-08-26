/// <reference types="Cypress" />

describe('My new Test Suite', function() {

    it('My new Test Case', function() {

        cy.visit(Cypress.env('url')+"AutomationPractice/")

        //nth-child(2) - to find 2nd child element
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text=$el.text()
            if (text.includes("Python")) {

                //Getting next sibling and text from another column.
                //text() is a jquerry element, so we need to use it through function
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
            
        })

    })
})