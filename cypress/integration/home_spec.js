
const url = Cypress.config('baseUrl') + '/';

describe('Home page', function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it('Should has key words "Donation" and "Prototype" in page title', function() {
    cy.title().should('include', 'Donation').should('include', 'Prototype');
  });

  it('Should has a level 1 heading tag <H1> that contains key words "Donation" and "Prototype" ', function() {
    cy.get('h1').contains('Donation').contains('Prototype');
  });
});