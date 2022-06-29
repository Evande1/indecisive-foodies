describe('Update food', () => {

  it('check update data successfully' , () => {
    cy.visit('localhost:3000/admin');
    cy.get('svg[data-testid="EditIcon"').first().click();
    cy.get('input[name="meal"]').clear().type('Chocalate Cake');
    cy.get('input[name="meal"]').should('have.value', 'Chocalate Cake');

    cy.get('.form-select')
    .parent()
    .click()
    .get('ul > li[data-value="BREAKFAST"]')
    .click();

    cy.get('.form-submit').click();

    cy.visit('localhost:3000/admin');
    cy.get('td').first().should('have.text', 'Chocalate Cake')

  })



})