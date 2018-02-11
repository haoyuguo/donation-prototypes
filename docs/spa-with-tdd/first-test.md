# First test - home page

## First test file 

Add the following to ```cypress.json```
```
  "baseUrl": "http://localhost"
```

Then create a new test file ```cypress/integration/home_spec.js``` 
```
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
```

If the Cypress panel is open now, the new test file would appear on the panel.  Click on it to run, and expect part of it to fail -- because the home page now still have the default contents, which doesn't include a \<H1> tag at all.

This is a RED.
