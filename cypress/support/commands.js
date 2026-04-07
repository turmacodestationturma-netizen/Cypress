Cypress.Commands.add('aceitarCookies', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#onetrust-accept-btn-handler').length > 0) {
      cy.get('#onetrust-accept-btn-handler').click()
    }
  })
})

Cypress.Commands.add('preencherCampo', (nome, valor) => {
  cy.get(`[name="${nome}"]`).clear().type(valor)
})
