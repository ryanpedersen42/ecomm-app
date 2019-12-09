describe('Cart Dropdown Tests', () => {
  beforeEach(() => {
    cy.visit('/shop/electronics')

    cy.get('.custom-button[data-cy=Boombox]')
      .click({ force: true })
  })

  it('increments number in cart icon', () => {
    cy.get('.cart-icon')
      .contains(1)
  })
  
  it('adds to cart dropdown', () => {
    cy.get('.custom-button[data-cy=Turntable]')
      .click({ force: true })

    cy.get('.cart-icon')
      .click() 

    cy.get('.cart-item')
      .should('have.length', 2)
  })

  it('can add multiple items to cart', () => {
    cy.get('.custom-button[data-cy=Boombox]')
      .click({ force: true })

    cy.get('.custom-button[data-cy=Turntable]')
      .click({ force: true })

    cy.get('.cart-icon')
      .contains(3)
  })

  it('handles empty cart', () => {
    cy.visit('/checkout')

    cy.get('.remove-button[data-cy=clear-item-Boombox]')
      .click()

    cy.get('.cart-icon')
      .click() 

    cy.get('.cart-items')
      .contains('Your cart is empty')
      .should('be.visible')  
  })
})