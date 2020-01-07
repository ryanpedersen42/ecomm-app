Cypress.Commands.add('loginUICommand', () => {
  cy.visit('/signin')
  cy
    .get('.form-input[data-cy=sign-in-email]')
    .type('a@a.com')

  cy
    .get('.form-input[data-cy=sign-in-password]')
    .type('Tester1!{enter}')
})

Cypress.Commands.add('itemToCart', () => {
  cy.visit('/shop/cameras')

  cy.get('.custom-button[data-cy=Sabre]')
    .click({ force: true })
})