/// <reference types="cypress" />

describe('GIVEN Login page', () => {
  const validEmail = 'test@example.com';
  const signupUrl = Cypress.env('signupUrl');

  it('WHEN valid email is registered THEN display dashboard page', () => {
    cy.visit(signupUrl);

    cy.contains('Welcome to monday.com');

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Continue")').eq(1).click();

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Next")').click();
    cy.contains(`Hello ${validEmail}`);
  });

  it('WHEN dashboard is visited THEN display relevant information', () => {
    cy.visit(signupUrl);

    cy.contains('Welcome to monday.com');

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Continue")').eq(1).click();

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Next")').click();
    cy.contains(`Hello ${validEmail}`);
    cy.get('button:contains("Logout")').click();

    cy.get('img[alt="Monday logo"]').should('be.visible');
    cy.contains(`Hello ${validEmail}`);
    cy.get('button:contains("Logout")').should('be.visible');
  });

  it('WHEN logout is clicked THEN redirect to login page', () => {
    cy.visit(signupUrl);

    cy.contains('Welcome to monday.com');

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Continue")').eq(1).click();

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Next")').click();
    cy.contains(`Hello ${validEmail}`);
    cy.get('button:contains("Logout")').click();

    cy.get('img[alt="Monday logo"]').should('be.visible');
    cy.contains(`Hello ${validEmail}`);
    cy.get('button:contains("Logout")').click();

    cy.contains('Log in to your account').should('be.visible');
  });
});
