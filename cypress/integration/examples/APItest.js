/// <reference types="Cypress" />

describe('My API test suite', function() {

    it('First test case', function() {

        cy.request('POST', 'https://rahulshettyacademy.com/Library/Addbook.php', {
            "name": "It is a name",
            "Country": "Poland",
            "Age": 25
        }).then(function(response) {
            expect(response.body).to.have.property("Msg", "succesfully added")
            expect(response.status).to.eq(200)

        })
    })

})