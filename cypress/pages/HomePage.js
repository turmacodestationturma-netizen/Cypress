import BasePage from './BasePage'

const elementos = {
  btnAbrirConta: '.sc-ilxdoe',
}

class HomePage extends BasePage {
  acessar() {
    this.visit('/')
  }

  clicarAbrirConta() {
    cy.get(elementos.btnAbrirConta).click()
  }
}

export default HomePage
