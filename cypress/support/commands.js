Cypress.Commands.add('login', () => {
  cy.visit('/signin')
  cy.get('.form-input[data-cy=sign-in-email]').type('a@a.com')
  cy.get('.form-input[data-cy=sign-in-password]').type('Tester1!')
  cy.hash().should('eq', '')
  // ((resp) => {
  //   window.localStorage.setItem('jwt', resp.body.user.token)
  // })
})