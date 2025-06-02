describe('Carrinho', () => {
  it('Deve colocar os produtos no carrinho', ()  => {
  
    // Realizar Login
    cy.login(); 
    cy.url().should('include', '/inventory.html');
    cy.contains('Swag Labs').should('be.visible');
    cy.contains('Products').should('be.visible');

    // Adicionar o primeiro produto ao carrinho
    cy.wait(2000);
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').should('be.visible'); // Válida que o nome do produto esta visivel
    cy.contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').should('be.visible'); //Verificar a descrição do produto
    cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click(); //Adicionar ao carrinhos
    cy.get('.shopping_cart_link').should('contain', '1');  // Valida que o carrinho foi atualizado

    // Adicionar o segundo produto ao carrinho
    cy.wait(2000);
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bolt T-Shirt').should('be.visible');
    cy.contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.').should('be.visible');
    cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click(); 
    cy.get('.shopping_cart_link').should('contain', '2');  
 
    //Abrir o carrinho
    cy.get('.shopping_cart_link').click();
    cy.contains('Swag Labs').should('be.visible');
    cy.contains('Your Cart').should('be.visible');
    cy.contains('QTY').should('be.visible');
    cy.contains('Description').should('be.visible');
    cy.get('.shopping_cart_badge').should('contain', '2');  

    //Remover o produto "Sauce Labs Backpack" do carrinho
    cy.wait(2000);
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').should('be.visible'); 
    cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Continuar comprando e colocar mais um produto no carinho 
    cy.wait(2000);
    cy.get('button[data-test="continue-shopping"]').click();
    cy.get('[data-test="inventory-item-name"]').contains('Test.allTheThings() T-Shirt (Red)').should('be.visible');
    cy.contains('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.').should('be.visible');
    cy.get('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click(); 
    cy.get('.shopping_cart_link').should('contain', '2');  

    // Abrir o carrinho novamente
    cy.wait(2000);
    cy.Carrinho();
    cy.get('.shopping_cart_badge').should('contain', '2');  
    
    // Clicar em checkout
    cy.wait(2000);
    cy.get('button[data-test="checkout"]').click();
    cy.contains('Checkout: Your Information').should('be.visible');
    cy.get('input[name="firstName"]').type('Luana'); 
    cy.get('input[name="lastName"]').type('Santana'); 
    cy.get('input[name="postalCode"]').type('81920-200'); 
    cy.get('input[data-test="continue"]').click();

    //Checkout: Visão geral
    cy.contains('Swag Labs').should('be.visible');
    cy.contains('Checkout: Overview').should('be.visible');
    cy.contains('QTY').should('be.visible');
    cy.contains('Description').should('be.visible');
    cy.contains('Payment Information').should('be.visible');
    cy.contains('SauceCard #31337').should('be.visible');
    cy.contains('Shipping Information:').should('be.visible');
    cy.contains('Free Pony Express Delivery!').should('be.visible');
    cy.contains('Price Total').should('be.visible');
    cy.contains('Item total: $31.98').should('be.visible');
    cy.contains('Tax: $2.56').should('be.visible');
    cy.contains('Total: $34.54').should('be.visible');

    //Finalizar compra 
    cy.get('button[data-test="finish"]').click();
    cy.contains('Checkout: Complete!').should('be.visible');
    cy.contains('Thank you for your order!').should('be.visible');
    cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible');
    cy.get('button[data-test="back-to-products"]').click(); 
  })
})