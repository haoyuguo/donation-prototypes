const pageName = 'Admin';
const relativeUrl = '/admin';
const url = Cypress.config('baseUrl') + relativeUrl;

describe(`${pageName} home page "${relativeUrl}"`, function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it(`Should has a level 2 heading tag <H2> that contains key phrase ${pageName}"`, function() {
    cy.get('h2').contains(pageName);
  });
});