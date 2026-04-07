import BasePage from './BasePage'

const elementos = {
  msgSucesso:    'Prontinho! Recebemos os seus dados.',
  linkBaixeApp:  "//h3/span[normalize-space()='baixe nosso app,']",
}

class ConfirmacaoPage extends BasePage {
  verificarMensagemSucesso() {
    cy.contains(elementos.msgSucesso).should('be.visible')
  }

  clicarBaixeOApp() {
    cy.xpath(elementos.linkBaixeApp).click()
  }
}

export default ConfirmacaoPage
