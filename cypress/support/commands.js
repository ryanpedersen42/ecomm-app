Cypress.Commands.add('login', (user) => {
  cy.visit('/signin')
  cy.get('.form-input[data-cy=sign-in-email]').type(user.email)
  cy.get('.form-input[data-cy=sign-in-password]').type(`${user.password}{enter}`)
})

