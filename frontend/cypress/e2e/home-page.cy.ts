describe('Indecisive foodies Home Page' , () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Check if homepage loads' , () => {
    cy.get('.home-page-header').should('have.text', 'Randomise Your food')
  })

  it('Check dropdown menu' , () => {
    cy.get('.home-page-dropdown-menu')
  .parent()
  .click()
  .get('ul > li[data-value="BREAKFAST"]')
  .click();

    cy.get('.MuiSelect-nativeInput').should('have.value', 'BREAKFAST');

    cy.get('.home-page-dropdown-menu')
    .parent()
    .click()
    .get('ul > li[data-value="LUNCH"]')
    .click();
  
      cy.get('.MuiSelect-nativeInput').should('have.value', 'LUNCH');


      cy.get('.home-page-dropdown-menu')
      .parent()
      .click()
      .get('ul > li[data-value="DINNER"]')
      .click();
    
        cy.get('.MuiSelect-nativeInput').should('have.value', 'DINNER');


        cy.get('.home-page-dropdown-menu')
        .parent()
        .click()
        .get('ul > li[data-value="SNACKS"]')
        .click();
      
          cy.get('.MuiSelect-nativeInput').should('have.value', 'SNACKS');

  })


  it('Check random picker' , () => {
    cy.get('.random-picker-button').click();
    cy.get('.random-picker-choice').should('not.have.text', '?')
  })


})