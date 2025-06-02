// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Comando de login --

Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/');
        cy.contains('Swag Labs').should('be.visible');
        cy.get('input[name="user-name"]').type('standard_user'); // Digita o nome de usuário
        cy.wait(1000);
        cy.get('input[name="password"]').type('secret_sauce'); // Digita a senha
        cy.wait(1000);
        cy.get('input[data-test="login-button"]').click(); // Conecte-se
  });

  Cypress.Commands.add('Carrinho', () => {
  //Abrir o carrinho
   cy.get('.shopping_cart_badge').should('be.visible').click();

});
