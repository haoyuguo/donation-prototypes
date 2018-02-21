const pageName = 'Make a Donation';
const relativeUrl = '/donate';
const url = Cypress.config('baseUrl') + relativeUrl;

describe(`"${pageName}" page "${relativeUrl}"`, function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it(`Should have a level 2 heading tag <H2> that contains key phrase ${pageName}"`, function() {
    cy.get('h2').contains(pageName);
  });

  it(`Should have a donation form`, function() {
      cy.get('form');
  });

  // basic fields - name, email, amount
  it(`Should have a "name" field that's required`, function() {
    cy.get('form')
      .get('input#name')
      .should('have.attr', 'required');
  });

  it(`Should have an "email" field that's required, and allows only email`, function() {
    cy.get('form')
      .get('input#email')
      .should('have.attr', 'type', 'email')
      .and('have.attr', 'required');
  });

  it(`Should have an "amount" field that's required, and allows only number`, function() {
    cy.get('form')
      .get('input#amount')
      .should('have.attr', 'type', 'number')
      .and('have.attr', 'required');
  });

  // options - payment method, matching gift, designation
  it(`Should have a group of radio buttons for choosing a payment method, and credit card is checked by default.`, function() {
    var donationForm = cy.get('form');

    donationForm.get('input#creditCardPayment')
      .should('have.attr', 'type', 'radio')
      .and('have.attr', 'value', 'creditCard')
      .and('be.checked');

    donationForm.get('input#checkPayment')
      .should('have.attr', 'type', 'radio')
      .and('have.attr', 'value', 'check')
      .not('be.checked');

    donationForm.get('input#paypalGivingFund')
      .should('have.attr', 'type', 'radio')
      .and('have.attr', 'value', 'paypalGivingFund')
      .not('be.checked');

    donationForm.get('input#paypal')
      .should('have.attr', 'type', 'radio')
      .and('have.attr', 'value', 'paypal')
      .not('be.checked');
  });

  it(`Should have two radio buttons for indicating whether the donor expects a company matching gift, and "No" is checked by default`, function() {
    var donationForm = cy.get('form');

    donationForm.get('input#yesMatching')
      .should('have.attr', 'type', 'radio')
      .and('have.attr', 'value', 'Yes')
      .not('be.checked');

    donationForm.get('input#noMatching')
      .should('have.attr', 'type', 'radio')
      .and('have.attr', 'value', 'No')
      .and('be.checked');
  });

  it(`Should have a text field for donation designation, that is not required`, function() {
    cy.get('form')
      .get('input#designation')
      .should('have.attr', 'type', 'text')
      .not('have.attr', 'required');
  });

  // With default options, displayed payment info. should be for a credit card, and matching info. should not be visible
  it(`Should by default have credit card payment fields`, function() {
    var donationForm = cy.get('form');

    donationForm.get('input#creditCardNumber');
    donationForm.get('input#cardHolder');
    donationForm.get('input#expiration');
    donationForm.get('input#security');
  });

  it(`Should by default NOT have matching related fields`, function() {
    var donationForm = cy.get('form');

    cy.get('input#company').should('not.exist');
    cy.get('input#matchingAmount').should('not.exist');
  });
});

describe(`Choose different options for donation form on page "/donate"`, function() {
  beforeEach(function() {
    cy.visit(url);
  });

  it(`When selected "Check" radio button, check related fields should display, and credit card payment fields should not.`, function() {
    cy.get('input#checkPayment').click();

    cy.get('input#checkNumber').should('exist');

    cy.get('input#paypalGivingFundEmail').should('not.exist');

    cy.get('input#paypalEmail').should('not.exist');

    cy.get('input#creditCardNumber').should('not.exist');
    cy.get('input#cardHolder').should('not.exist');
    cy.get('input#expiration').should('not.exist');
    cy.get('input#security').should('not.exist');
  });

  it(`When selected "Paypal Giving Fund" radio button, Paypal Giving Fund related fields should display, and other fields should not.`, function() {
    cy.get('input#paypalGivingFund').click();

    cy.get('input#paypalGivingFundEmail').should('exist');

    cy.get('input#paypalEmail').should('not.exist');

    cy.get('input#checkNumber').should('not.exist');

    cy.get('input#creditCardNumber').should('not.exist');
    cy.get('input#cardHolder').should('not.exist');
    cy.get('input#expiration').should('not.exist');
    cy.get('input#security').should('not.exist');
  });

  it(`When selected "Paypal" radio button, Paypal related fields should display, and other fields should not.`, function() {
    cy.get('input#paypal').click();

    cy.get('input#paypalEmail').should('exist');

    cy.get('input#paypalGivingFundEmail').should('not.exist');

    cy.get('input#checkNumber').should('not.exist');

    cy.get('input#creditCardNumber').should('not.exist');
    cy.get('input#cardHolder').should('not.exist');
    cy.get('input#expiration').should('not.exist');
    cy.get('input#security').should('not.exist');
  });
});
