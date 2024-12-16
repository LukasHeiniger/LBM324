describe('Theme Toggle Button Test', () => {
  it('sollte das Theme wechseln, wenn der Button geklickt wird', () => {

    cy.visit('https://lukasheiniger.github.io/LBM324/');


    cy.get('#theme-toggle').should('exist');


    cy.get('html').should('not.have.attr', 'data-theme', 'dark');


    cy.get('#theme-toggle').click();


    cy.get('html').should('have.attr', 'data-theme', 'dark');


    cy.get('#theme-toggle').click();


    cy.get('html').should('not.have.attr', 'data-theme', 'dark');
  });
});
