/// <reference types="Cypress" />

describe('My Mocha test suite', function() {

    it('Response Moching test case', function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        //Moching request
        //cy.intercept({requeestobject}, {response})
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty' 
        }, 
        {
            statusCode: 200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }]
        }).as('bookretrievals')

cy.get("button[class='btn btn-primary']").click()
cy.wait('@bookretrievals')
cy.get('p').should('have.text', 'Oops only 1 Book available')

    })


})