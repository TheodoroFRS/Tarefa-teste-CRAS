describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.get("#email").type("Theo@gmail.com");
    cy.get("#senha").type("@Theo12345678");
    cy.get(" .styles_button__dr0t2").click();
  });

  // it('Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {

  //   cy.get(".styles_buttonMenu__mmyUS > img").click();

  //   cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
  //   cy.get("    :nth-child(5) > .styles_button__dr0t2").click();

  //   cy.get("#nomeCadastrar").type("TesteCrasTheo");
  //   cy.get("#emailCadastrar").type("TesteCrasTheo@gmail.com");
  //   cy.get("#senhaCadastrar").type("@TesteCrasTheo12345678");

  //   cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
  //   cy.get('#grupoCadastrar').select('Administrador')

  //   cy.get('[type="submit"]').click();
  //   // //cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso!');
  // })

  //   it('Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso', () => {

  //   cy.get(".styles_buttonMenu__mmyUS > img").click();

  //   cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
  //   cy.get("    :nth-child(5) > .styles_button__dr0t2").click();

  //   cy.get("#nomeCadastrar").type("TesteCrasTheo");
  //   cy.get("#emailCadastrar").type("TesteCrasTheo@gmail.com");
  //   cy.get("#senhaCadastrar").type("@TesteCrasTheo12345678");

  //   cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
  //   cy.get('#grupoCadastrar').select('Administrador')

  //   cy.get('[type="submit"]').click();
  //   cy.get('.Toastify__toast-body').contains('E-mail já cadastrado!');
  // })

  // it("Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso", () => {
  //   cy.get(".styles_buttonMenu__mmyUS > img").click();

  //   cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");

  //   cy.get(":nth-child(4) > .styles_button__dr0t2").click();

  //   cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Sim");
  // });

  // it("Deve retornar uma consulta do usurário cadastrado com status inativo - cenário de sucesso", () => {
  //   cy.get(".styles_buttonMenu__mmyUS > img").click();

  //   cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");

  //   cy.get("span.styles_slider__0TNp_").click();
  //   cy.get(":nth-child(4) > .styles_button__dr0t2").click();
  //   // buscar por não ativo não funciona

  //   // cy.get("#nome").type("TesteCrasTheo");

  //   // cy.get(":nth-child(4) > .styles_button__dr0t2").click();

  //   cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Não");
  // });

  // it("Deve atualizar os dados de um usuário - cenário de sucesso", () => {
  //   cy.get(".styles_buttonMenu__mmyUS > img").click();

  //   cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");

  //   cy.get("#nome").type("TesteCrasTheo");

  //   cy.get(":nth-child(4) > .styles_button__dr0t2").click();

  //   cy.wait(1000)

  //   cy.get('[alt="Atualizar usuário"]').click();

  //   cy.get('#grupo').select('Padrão')

  //   cy.get('[type="submit"]').click();

  //   cy.get('.Toastify__toast-body > :nth-child(2)').contains('Usuário atualizado com sucesso');
  // });

  it("Deve visualizar as informações de um usuário - cenário de sucesso", () => {
    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");

    cy.get("#nome").type("TesteCrasTheo");

    cy.get(":nth-child(4) > .styles_button__dr0t2").click();

    cy.wait(1000)

    cy.get('[alt="Informação do usuário"]').click();

    cy.get(':nth-child(2) > .styles_formItem__H8I19 > .styles_container__NSLBw > .styles_text__68fzG').contains('Padrão');
  });

});

// 2 Usuario.cy.js
// Texto do caso de teste 'Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso'
// Texto do caso de teste 'Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso'
// Texto do caso de teste 'Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso'
// Texto do caso de teste 'Deve retornar uma consulta do usurário cadastrado com status inativo - cenário de sucesso'
// Texto do caso de teste 'Deve atualizar os dados de um usuário - cenário de sucesso '
// Texto do caso de teste 'Deve visualizar as informações de um usuário - cenário de sucesso'
