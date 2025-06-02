describe('Ordenação', () => {
  it('Deve ordenar os produtos', () => {
  
    cy.login(); // Faz login antes
    cy.url().should('include', '/inventory.html');
  
    cy.get('#react-burger-menu-btn').click(); //Abrir Menu
    cy.wait(2000);
    cy.get('#logout_sidebar_link').click(); // Clica em "Logout"
   });
});