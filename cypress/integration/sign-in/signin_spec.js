describe('Sign In Tests', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('can sign me in and out', () => {
    //longer test to confirm the sign in / sign out functionality
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