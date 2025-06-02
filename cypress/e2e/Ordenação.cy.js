describe('Ordenação', () => {
  it('Deve ordenar os produtos', () => {
  
    cy.login(); // Faz login antes
    cy.url().should('include', '/inventory.html');
  
    cy.contains('Swag Labs').should('be.visible');
    cy.contains('Products').should('be.visible');

    cy.wait(2000);
  //cy.get('select[data-test="product-sort-container"]').select("az"); //Name (A to Z)
    cy.get('select[data-test="product-sort-container"]').select("za"); //Name (Z to A)
  //cy.get('select[data-test="product-sort-container"]').select("lohi"); //Price (low to high)
  //cy.get('select[data-test="product-sort-container"]').select("hilo"); //Price (high to low)
   });
});