beforeEach(function() {
    
        cy.fixture('example').then(function(data) {
            //second variable cant access outside (there are 2 different data variables), so we are initializing global variable
            this.data = data
        })
    
})