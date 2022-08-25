class HomePage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender() {
        return cy.get('select')
    }

    getTwoWayDataBinding() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEnterpreneurRadio() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get('a[href="/angularpractice/shop"]')
    }

    
}

export default HomePage;