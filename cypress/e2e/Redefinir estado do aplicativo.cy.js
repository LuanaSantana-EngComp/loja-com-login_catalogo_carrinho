describe('Ordenação', () => {
    it('Deve redefinir estado do aplicativo', () => {
    
      cy.login(); // Faz login antes
      cy.url().should('include', '/inventory.html');


      
    });
});