/// <reference types="cypress" />

describe('Signup page', () => {
  const signinUrl = Cypress.env('signinUrl');
  const signupUrl = Cypress.env('signupUrl');
  const validEmail = 'test@example.com';
  const invalidEmail = 'invalidemail';

  beforeEach(() => {
    cy.visit(signupUrl);
  });

  it('WHEN signup page requested THEN render required controls', () => {
    cy.contains('Welcome to monday.com').should('be.visible');
    cy.get('button:contains("Continue with Google")');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('button:contains("Continue")').eq(1).should('be.visible');
    cy.get(`a[href="${signinUrl}"]`).should('be.visible');
  });

  it('WHEN invalid email address entered THEN display error message', () => {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(invalidEmail).should('have.value', invalidEmail);
    cy.get('button:contains("Continue")').eq(1).click();
    cy.contains('Please enter a valid email address');
  });

  it('WHEN valid emailid is entered THEN register and redirect to login page', () => {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('input[type="email"]').type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Continue")').eq(1).click();

    cy.contains('Log in to your account').should('be.visible');
  });

  it('redirects to Login from the sign up page', () => {
    cy.get(`a[href="${signinUrl}"]`).should('be.visible').click();
    cy.contains('Log in to your account');
  });
});
