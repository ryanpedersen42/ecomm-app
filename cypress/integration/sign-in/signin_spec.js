/// <reference types="Cypress" />
describe('Sign In Tests', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  // other option is .location('pathname').should('eq', '/') -- why one vs the other here?

  it('can sign me in and out', () => {
    //long test to try out full auth path
    cy
      .get('.form-input[data-cy=sign-in-email]')
      .type('a@a.com')

    cy
      .get('.form-input[data-cy=sign-in-password]')
      .type('Tester1!{enter}')

    cy
      .url()
      .should('eq', 'http://localhost:3000/')

    cy
      .get('.header')
      .contains('SIGN OUT') 

    cy
      .get('.option[data-cy=sign-out-header]')
      .click()

    cy
      .get('.header')
      .contains('SIGN IN') 
  })
})