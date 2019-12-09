describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('can load home page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('can navigate to shoes', () => {
    cy.get('.title[data-cy=shoes]').click()
    cy.contains('Shoes').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/shop/shoes')
  })

  it('can add a cart in nav', () => {

  })

})