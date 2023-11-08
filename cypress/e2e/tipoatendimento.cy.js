import fake from "faker-br"
/// <reference types="cypress"/>


describe("Tipo de atendimento", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.login(Cypress.env('Email'), Cypress.env('Senha'), {log: false });
  });

  const nomeFaker = fake.name.firstName()

  it('Deve cadastrar tipo de atendimento com todos os campos preenchidos', () => {

    // cy.get(".styles_buttonMenu__mmyUS > img").click();

    // cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
    // cy.get("    :nth-child(5) > .styles_button__dr0t2").click();

    // cy.get("#nomeCadastrar").type(nomeFaker);
    // cy.get("#emailCadastrar").type(fake.internet.email());
    // cy.get("#senhaCadastrar").type(fake.internet.password() + "@12345678");

    // cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
    // cy.get('#grupoCadastrar').select('Administrador')

    // cy.get('[type="submit"]').click();
    // cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso');
  })

  it('Deve retornar msg de campos obrigatórios', () => {

    // cy.get(".styles_buttonMenu__mmyUS > img").click();

    // cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
    // cy.get("    :nth-child(5) > .styles_button__dr0t2").click();

    // cy.get("#nomeCadastrar").type(nomeFaker);
    // cy.get("#emailCadastrar").type("TesteCrasTheo@gmail.com");
    // cy.get("#senhaCadastrar").type(fake.internet.password() + "T@t12345678");

    // cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
    // cy.get('#grupoCadastrar').select('Administrador')

    // cy.get('[type="submit"]').click();
    // cy.get('.Toastify__toast-body').contains('E-mail já cadastrado!');
  })

  it("Deve pesquisar um tipo de atendimento e alterar seu nome", () => {
    // cy.get(".styles_buttonMenu__mmyUS > img").click();

    // cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");

    // cy.get("#nome").type(nomeFaker);
    // cy.get(":nth-child(4) > .styles_button__dr0t2").click();

    // cy.get(" tbody > :nth-child(1) > :nth-child(1)").contains(nomeFaker);
    // cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Sim");
  });

});

// Texto do describe("Tipo de atendimento")

// Texto do caso de teste("Deve cadastrar tipo de atendimento com todos os campos preenchidos")

// Texto do caso de teste ("Deve retornar msg de campos obrigatórios")

// Texto do caso de teste ("Deve pesquisar um tipo de atendimento e alterar seu nome")
