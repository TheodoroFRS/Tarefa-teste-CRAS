
//comando personalizado para facilitar a escrita do teste
Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
  });
  
  
  // Comando personalizado para faciliata login no site
  Cypress.Commands.add('login', (email, senha) => {
    cy.get('#email').type(`${email}`);
    cy.get('#senha').type(`${senha}`, {log: false });
    cy.get(' .styles_button__dr0t2').click();
  });

    // Comando personalizado para faciliata o loguot
    Cypress.Commands.add('sair', () => {
      cy.get(`.styles_buttonMenu__mmyUS > img`).click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > div.styles_containerLink__L2Kg7').click();
      cy.get(`:nth-child(2) > .styles_button__dr0t2`).click();
    });



    // Comando personalizado para  criar usuario
    Cypress.Commands.add('criarUsuario', (nome,email, senha) => {
      
      cy.get(".styles_buttonMenu__mmyUS > img").click();

      cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
      cy.get("    :nth-child(5) > .styles_button__dr0t2").click();
  
      cy.get("#nomeCadastrar").type(`${nome}`);
      cy.get("#emailCadastrar").type(`${email}`);
      cy.get("#senhaCadastrar").type(`${senha}`, {log: false });
  
      cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
      cy.get('#grupoCadastrar').select('Administrador')
  
      cy.get('[type="submit"]').click();
      cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso');
    });



  //npx cypress open

  Cypress.Commands.add("usuarios", () => {
    cy.get(`.styles_button__dr0t2`).click();
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click()
    cy.wait(1000)
    cy.get(".styles_buttonMenu__mmyUS > img").click()
    cy.wait(1000)
});

Cypress.Commands.add("tipo_atendimentos", () => {
  cy.get(`.styles_button__dr0t2`).click();
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
  cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"] > .styles_containerLinkText__Rz0Qr').click()
  cy.wait(1000)
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
})

Cypress.Commands.add("pessoas", () => {
  cy.get(`.styles_button__dr0t2`).click();
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
  cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click()
  cy.wait(1000)
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
})

Cypress.Commands.add("atendimentos", () => {
  cy.get(`.styles_button__dr0t2`).click();
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
  cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click()
  cy.wait(1000)
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
})

Cypress.Commands.add("perfil", () => {
  cy.get(`.styles_button__dr0t2`).click();
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
  cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/perfil"]').click()
  cy.wait(1000)
  cy.get(".styles_buttonMenu__mmyUS > img").click()
  cy.wait(1000)
})