describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://front-cras.app.fslab.dev/');
    cy.get("#email").type("Theo@gmail.com");
    cy.get("#senha").type("@Theo12345678");
    cy.get(" .styles_button__dr0t2").click();
  })

  it('Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {

    cy.get(".styles_buttonMenu__mmyUS > img").click();

    cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
    cy.get("    :nth-child(5) > .styles_button__dr0t2").click();

    cy.get("#nomeCadastrar").type("Crasteste");
    cy.get("#emailCadastrar").type("testeCras@gmail.com");
    cy.get("#senhaCadastrar").type("asd");
    
    cy.get("#unidadeCadastrar").click();
    cy.get("#grupoCadastrar").click();

    cy.get('[type="submit"]').click();
  })
})


// 2 Usuario.cy.js
// Texto do caso de teste 'Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso' 
// Texto do caso de teste 'Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso'
// Texto do caso de teste 'Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso'
// Texto do caso de teste 'Deve retornar uma consulta do usurário cadastrado com status inativo - cenário de sucesso'
// Texto do caso de teste 'Deve atualizar os dados de um usuário - cenário de sucesso ' 
// Texto do caso de teste 'Deve visualizar as informações de um usuário - cenário de sucesso' 