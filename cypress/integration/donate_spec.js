
const url = Cypress.config('baseUrl') + '/donate';

describe('Donate page "/donate"', function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it('Should has a level 1 heading tag <H2> that contains key phrase "Make a Donation"', function() {
    cy.get('h2').contains('Make a Donation');
  });
});