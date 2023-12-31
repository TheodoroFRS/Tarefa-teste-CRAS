describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://front-cras.app.fslab.dev/');
  })

  it('Deve realizar o login com sucesso- cenário de  sucesso', () => {
    cy.get("#email").type("Theo@gmail.com");
    cy.get("#senha").type("@Theo12345678");
    cy.get(" .styles_button__dr0t2").click();
  })

  it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {
    cy.get("#email").type("Theo@gmail.com");
    cy.get("#senha").type("@Theo87654321");
    cy.get(" .styles_button__dr0t2").click();

    cy.get('.Toastify__toast-body').contains('Usuário ou Senha inválida!');
  })

  it('Deve retornar msg dos campos obrigatório para login - cenário de insucesso', () => {
    cy.get(" .styles_button__dr0t2").click();

    cy.get(':nth-child(2) > .styles_formItem__H8I19 > .styles_errorMessage__IKSlh').contains('O email é obrigatório');
    cy.get(':nth-child(3) > .styles_formItem__H8I19 > .styles_errorMessage__IKSlh').contains('A senha é obrigatória');

  })

})


// 1 - login.cy.js - Deve  

// Texto no describe 'Login'

// Texto do caso de teste 'Deve realizar o login com sucesso- cenário de  sucesso' 

// Texto do caso de teste 'Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso'

// Texto do caso de teste 'Deve retornar msg dos campos obrigatório para login - cenário de insucesso'
