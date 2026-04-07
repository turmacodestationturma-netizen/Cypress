/// <reference types="cypress" />

import HomePage             from '../../pages/HomePage'
import FormularioContaPFPage from '../../pages/FormularioContaPFPage'
import ConfirmacaoPage      from '../../pages/ConfirmacaoPage'

const homePage   = new HomePage()
const formulario = new FormularioContaPFPage()
const confirmacao = new ConfirmacaoPage()

describe('Formulário de Abertura de Conta PF', () => {
  beforeEach(() => {
    homePage.acessar()
    homePage.aceitarCookies()
    homePage.clicarAbrirConta()
  })

  context('Cenários positivos', () => {
    it('Deve preencher o formulário com dados válidos e exibir confirmação', () => {
      cy.fixture('usuarios').then(({ contaValida }) => {
        formulario.preencherFormulario(contaValida)
        confirmacao.verificarMensagemSucesso()
      })
    })

    it('Deve exibir o link de download do app após confirmação', () => {
      cy.fixture('usuarios').then(({ contaValida }) => {
        formulario.preencherFormulario(contaValida)
        confirmacao.verificarMensagemSucesso()
        confirmacao.clicarBaixeOApp()
      })
    })
  })

  context('Cenários negativos', () => {
    it('Deve exibir erro ao submeter com CPF inválido', () => {
      cy.fixture('usuarios').then(({ cpfInvalido }) => {
        formulario.preencherNome(cpfInvalido.nome)
        formulario.preencherTelefone(cpfInvalido.telefone)
        formulario.preencherEmail(cpfInvalido.email)
        formulario.preencherCPF(cpfInvalido.cpf)
        formulario.preencherDataNascimento(cpfInvalido.dataNascimento)
        formulario.clicarContinuar()
        formulario.verificarErroCPF()
      })
    })

    it('Deve exibir erro ao submeter com e-mail inválido', () => {
      cy.fixture('usuarios').then(({ emailInvalido }) => {
        formulario.preencherNome(emailInvalido.nome)
        formulario.preencherTelefone(emailInvalido.telefone)
        formulario.preencherEmail(emailInvalido.email)
        formulario.preencherCPF(emailInvalido.cpf)
        formulario.preencherDataNascimento(emailInvalido.dataNascimento)
        formulario.clicarContinuar()
        formulario.verificarCampoObrigatorio('email')
      })
    })
  })
})
