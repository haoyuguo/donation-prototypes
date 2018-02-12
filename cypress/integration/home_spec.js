const relativeUrl = '/';
const url = Cypress.config('baseUrl') + relativeUrl;

describe(`Home page "${relativeUrl}"`, function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it('Should has key words "Donation" and "Prototype" in page title', function() {
    cy.title().should('include', 'Donation').should('include', 'Prototype');
  });

  it('Should has a level 1 heading tag <H1> that contains key words "Donation" and "Prototype" ', function() {
    cy.get('h1').contains('Donation').contains('Prototype');
  });

  it('Should has a level 2 heading tag <H2> that contains key word "Home"', function() {
    cy.get('h2').contains('Home');
  });

});