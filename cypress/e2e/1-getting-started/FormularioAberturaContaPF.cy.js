/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://inter.co/')


  })

 it('Preecher formulario ABertura Conta PF',()=>{

 cy.get('#onetrust-accept-btn-handler').click();
 cy.get('.sc-ilxdoe').click()
 cy.get('[name="name"]').type('Samuel Xavier rodrigues')
 cy.get('[name="phone"]').type('11958639439')
 cy.get('[name="email"]').type('teste@teste.com.br')
 cy.get('[name="socialId"]').type('711.867.710-89')
 cy.get('[name="dateOfBirth"]').type(21021990)
 cy.get('.sc-iKOlBD').click()
 cy.get('.sc-irLwvM').click()
 cy.contains('Prontinho! Recebemos os seus dados.').should('be.visible')
 cy.xpath("//h3/span[normalize-space()='baixe nosso app,']").click()
 

})

  

  
})
