/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'


describe('My new Test Suite', function() {

    //Runs once before all tests
    before(function() {
        cy.fixture('example').then(function(data) {
            //second variable cant access outside (there are 2 different data variables), so we are initializing global variable
            this.data = data
        })
    })

    it('My new Test Case', function() { 

        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        //Checking second textbox if name dublicated
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        //Checking min lenght 2 characters. ('have.minlength' doesnt work because it is not jquery) - another way how to do it find in Test7.js
        homePage.getEditBox().should('have.attr','minlength','2')
        
        //Checking if radio is disabled
        homePage.getEnterpreneurRadio().should('be.disabled')

        //Click on the shop button
        homePage.getShopTab().click()


        //Taking products from the commands.js and iterating through all of them
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
        

        //Going to the cart
        productsPage.checkOutButton().click()

    })

})