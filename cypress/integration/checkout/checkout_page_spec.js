describe('Checkout Page Tests', () => {
  beforeEach(() => {
    cy.visit('/shop/accessories')

    cy.get('.custom-button[data-cy=Cassettes]')
      .click({ force: true })

    cy.visit('/checkout')
  })
      
  it('adds to cart checkout page', () => {
    cy.get('.checkout-item')
      .should('have.length', 1)
      .contains('Cassettes')
  })

  it('increments cart on checkout page', () => {
    cy.get('.arrow[data-cy=add-item-Cassettes]')
      .click()

    cy.get('.value[data-cy=quantity-Cassettes]')
      .should('contain', 2)
  })
  
  it('decrements cart on checkout page', () => {
    cy.get('.arrow[data-cy=add-item-Cassettes]')
      .click()

    cy.get('.arrow[data-cy=remove-item-Cassettes]')
      .click()

    cy.get('.value[data-cy=quantity-Cassettes]')
      .should('contain', 1)
  })

  it('removes item through reducing arrow to 0', () => {
    cy.get('.arrow[data-cy=remove-item-Cassettes]')
      .click()
    
    cy.get('.empty-message[data-cy=empty-checkout-page]')
      .should('be.visible')        
  })

  it('removes an item through the remove button', () => {
    cy.get('.remove-button[data-cy=clear-item-Cassettes]')
      .click()
    
    cy.get('.empty-message[data-cy=empty-checkout-page]')
      .should('be.visible')        
  })

  it('removes a single item and leaves the other', () => {
    cy.visit('/shop/cameras').get('.custom-button[data-cy=Polaroid]').click({ force: true }).visit('/checkout')

    cy.get('.remove-button[data-cy=clear-item-Cassettes]')
      .click()

    cy.get('.checkout-item')
      .should('have.length', 1)
  })
})