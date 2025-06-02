describe('Login', () => {
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.visit('https://www.saucedemo.com/');
  
    cy.contains('Swag Labs').should('be.visible');

  // Preenche os campos de login
    cy.get('input[name="user-name"]').type('standard_user'); // Digita o nome de usuário
    cy.wait(1000);
    cy.get('input[name="password"]').type('secret_sauce'); // Digita a senha
    cy.wait(1000);
    cy.get('input[data-test="login-button"]').click(); // Conecte-se
  });
});