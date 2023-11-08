
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

  //npx cypress open