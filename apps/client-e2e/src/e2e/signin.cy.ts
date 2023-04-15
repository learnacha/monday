/// <reference types="cypress" />

describe('GIVEN Login page', () => {
  const signinUrl = Cypress.env('signinUrl');
  const signupUrl = Cypress.env('signupUrl');
  const validEmail = 'test@example.com';
  const invalidEmail = 'invalidemail';

  beforeEach(() => {
    cy.visit(signinUrl);
  });

  it('WHEN login page requested THEN render required controls', () => {
    cy.get('img[alt="Monday logo"]').should('be.visible');
    cy.contains('Log in to your account').should('be.visible');
    cy.email().should('be.visible');
    cy.get('button:contains("Next ")').should('be.visible');
    cy.get('button:contains("Google")').should('be.visible');
    cy.get(`a[href="${signupUrl}"]`).should('be.visible');
  });

  it('WHEN invalid email address entered THEN display error message', () => {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.email().type(invalidEmail).should('have.value', invalidEmail);
    cy.get('button').first().click();
    cy.get('[role="alert"]').contains('Invalid email format, kindly enter the valid email address');
  });

  it('WHEN valid email id is entered and not registered THEN display error message', () => {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.email().type(validEmail).should('have.value', validEmail);
    cy.get('button').first().click();
    cy.contains('Email ID not found, kindly sign up to proceed');
  });

  it('WHEN signup link clicked THEN redirects to signup page', () => {
    cy.get(`a[href="${signupUrl}"]`).should('be.visible').click();
    cy.contains('Welcome to monday.com');
  });

  it('WHEN login failed SHOULD register user and login', () => {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.email().type(validEmail).should('have.value', validEmail);
    cy.get('button').first().click();
    cy.contains('Email ID not found, kindly sign up to proceed');

    cy.get(`a[href="${signupUrl}"]`).should('be.visible').click();
    cy.contains('Welcome to monday.com').should('be.visible');
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.email().type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Continue")').eq(1).click();

    cy.contains('Log in to your account').should('be.visible');
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.email().type(validEmail).should('have.value', validEmail);
    cy.get('button:contains("Next")').click();
    cy.contains(`Hello ${validEmail}`);
  });
});
