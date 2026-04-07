class BasePage {
  aceitarCookies() {
    cy.get('body').then(($body) => {
      if ($body.find('#onetrust-accept-btn-handler').length > 0) {
        cy.get('#onetrust-accept-btn-handler').click()
      }
    })
  }

  visit(path = '/') {
    cy.visit(path)
  }
}

export default BasePage
