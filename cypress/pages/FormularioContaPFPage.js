import BasePage from './BasePage'

const elementos = {
  inputNome:          '[name="name"]',
  inputTelefone:      '[name="phone"]',
  inputEmail:         '[name="email"]',
  inputCPF:           '[name="socialId"]',
  inputDataNascimento:'[name="dateOfBirth"]',
  btnContinuar:       '.sc-iKOlBD',
  btnConfirmar:       '.sc-irLwvM',
  msgErroCPF:         '[data-testid="socialId-error"], .error-socialId, [class*="error"]',
}

class FormularioContaPFPage extends BasePage {
  preencherNome(nome) {
    cy.get(elementos.inputNome).clear().type(nome)
  }

  preencherTelefone(telefone) {
    cy.get(elementos.inputTelefone).clear().type(telefone)
  }

  preencherEmail(email) {
    cy.get(elementos.inputEmail).clear().type(email)
  }

  preencherCPF(cpf) {
    cy.get(elementos.inputCPF).clear().type(cpf)
  }

  preencherDataNascimento(data) {
    cy.get(elementos.inputDataNascimento).clear().type(data)
  }

  clicarContinuar() {
    cy.get(elementos.btnContinuar).click()
  }

  clicarConfirmar() {
    cy.get(elementos.btnConfirmar).click()
  }

  preencherFormulario({ nome, telefone, email, cpf, dataNascimento }) {
    this.preencherNome(nome)
    this.preencherTelefone(telefone)
    this.preencherEmail(email)
    this.preencherCPF(cpf)
    this.preencherDataNascimento(dataNascimento)
    this.clicarContinuar()
    this.clicarConfirmar()
  }

  verificarErroCPF() {
    cy.get(elementos.msgErroCPF).should('be.visible')
  }

  verificarCampoObrigatorio(campo) {
    cy.get(`[name="${campo}"]`).should('have.attr', 'aria-invalid', 'true')
  }
}

export default FormularioContaPFPage
