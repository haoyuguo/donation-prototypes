
const url = Cypress.config('baseUrl') + '/';

describe('Home page', function() {
  it('Should has key words "Donation" and "Prototype" in page title', function() {
    cy.visit(url);
    cy.title().should('include', 'Donation');
    cy.title().should('include', 'Prototype');
  });

  it('Should has a level 1 heading tag <H1> that contains key words "Donation" and "Prototype" ', function() {
    cy.visit(url);
    cy.get('h1').should('include', 'Donation')
    cy.get('h1').should('include', 'Prototype');
  });
});