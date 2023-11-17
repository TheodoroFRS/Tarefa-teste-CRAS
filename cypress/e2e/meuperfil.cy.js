import fake from "faker-br"
/// <reference types="cypress"/>

const nomeFaker = fake.name.firstName() + "teste"
const email = fake.internet.email()
const senha = fake.internet.password() + "!@T12345678t"
const novasenha = fake.internet.password() + "!@t12345678T"

describe("Atendimentos", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.login(Cypress.env('Email'), Cypress.env('Senha'), {log: false });
    cy.criarUsuario(nomeFaker,email,senha)
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.sair()
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.login(email,senha, {log: false });
  
    cy.perfil()
  });


  it('Deve alterar os campos e a senha', () => {


    cy.get('.styles_button__dr0t2').click()

    cy.get('#senha').type(novasenha)
    cy.get('#confirmarSenha').type(novasenha)
    cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Senha alterada com sucesso')
    cy.wait(7000)
    cy.sair()
    cy.login(email,novasenha)
    cy.get('.styles_text__68fzG').contains("SEMAST - Pimenta Bueno")

  })



});
