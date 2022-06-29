describe('Add food function', () => {

  it('fill in form' , () => {
    cy.visit('localhost:3000/form');
    cy.get('.form-header').should('have.text', 'Fill in your food choices!');
    cy.get('input[name="meal"]').type('Chocalate Cake');
    cy.get('input[name="meal"]').should('have.value', 'Chocalate Cake');

    cy.get('.form-select')
    .parent()
    .click()
    .get('ul > li[data-value="BREAKFAST"]')
    .click();
    cy.get('.form-submit').click();

    cy.get('input[name="meal"]').should('have.value', '');

  })

  it('check if data is added correctly to the database', () => {
    cy.visit('localhost:3000/admin');
    cy.get('td').first().should('have.text', 'Chocalate Cake')

  })

})