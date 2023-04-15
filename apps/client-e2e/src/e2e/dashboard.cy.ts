/// <reference types="cypress" />

describe('GIVEN Dashboard page', () => {
  const validEmail = 'test@example.com';
  const signupUrl = Cypress.env('signupUrl');

  beforeEach(() => {
    cy.visit(signupUrl);
    cy.contains('Welcome to monday.com');

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Continue")').eq(1).click();
    cy.contains('Log in to your account').should('be.visible');

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Next")').click();
  });

  it('WHEN dashboard is visited THEN display relevant information', () => {
    cy.get('img[alt="Monday logo"]').should('be.visible');
    cy.contains(`Hello ${validEmail}`);
    cy.get('button:contains("Logout")').should('be.visible');
  });

  it('WHEN logout is clicked THEN redirect to login page', () => {
    cy.contains(`Hello ${validEmail}`);
    cy.get('button:contains("Logout")').click();

    cy.contains('Log in to your account').should('be.visible');
  });
});
