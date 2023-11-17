import fake from "faker-br"
/// <reference types="cypress"/>

describe("Tipo de atendimento", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.login(Cypress.env('Email'), Cypress.env('Senha'), {log: false });
    cy.tipo_atendimentos()
  });

  const atendimento = fake.name.firstName()
  const novoatendimento = fake.name.firstName()

  it('Deve cadastrar tipo de atendimento com todos os campos preenchidos', () => {
    cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
    cy.get('#nome').type(atendimento)
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains("Tipo de Atendimento cadastrado com sucesso")
  })

   it('Deve retornar msg de campos obrigatórios', () => {
    cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
    cy.wait(1000)
    cy.get('[type="submit"]').click()
    cy.get('.styles_errorMessage__IKSlh').contains('Nome é obrigatório')
    cy.wait(1000)
   })

   it('Deve pesquisar um tipo de atendimento e alterar seu nome', () => {
    cy.get('#tipo').type(atendimento)
    cy.get(':nth-child(2) > .styles_container__NSLBw > #buscar').click()
 
    cy.get('tbody > .styles_tr__2bCIW > :nth-child(1)').contains(atendimento)
    cy.get('[alt="Editar tipo de atendimento"]').click()

    cy.get('#nome').clear()
    cy.get('#nome').type(novoatendimento)
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains("Tipo de Atendimento Atualizado com sucesso")
   })
});