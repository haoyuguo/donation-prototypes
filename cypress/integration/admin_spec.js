
const url = Cypress.config('baseUrl') + '/admin';

describe('Admin home page "/admin"', function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it('Should has a level 1 heading tag <H2> that contains key phrase "Admin"', function() {
    cy.get('h2').contains('Admin');
  });
});