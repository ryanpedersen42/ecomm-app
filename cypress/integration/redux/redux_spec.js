import SHOP_DATA from '../../../src/redux/shop/shop.data';

describe('Redux Store Tests', () => {
  it('has expected redux initial state on load', () => {
    cy.visit('/')
    cy.window().its('store').invoke('getState').should('deep.equal', {
        user: {
          currentUser: null,
        },
        cart: {
          cartItems: [],
          hidden: true,
        }, 
        directory: {
          sections: [
            {
              title: 'electronics',
              imageUrl: 'https://images.unsplash.com/photo-1513104487127-813ea879b8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              id: 1,
              linkUrl: 'shop/electronics'
            },
            {
              title: 'cameras',
              imageUrl: 'https://images.unsplash.com/photo-1444069665489-8d498a22e2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              id: 2,
              linkUrl: 'shop/cameras'
            },
            {
              title: 'accessories',
              imageUrl: 'https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              id: 3,
              linkUrl: 'shop/accessories'
            },
            {
              title: 'shoes',
              imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
              size: 'large',
              id: 4,
              linkUrl: 'shop/shoes'
            },
            {
              title: 'apparel',
              imageUrl: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
              size: 'large',
              id: 5,
              linkUrl: 'shop/apparel'
            }
          ]
        }, 
        shop: {
          collections: SHOP_DATA
        },
        _persist: {
          rehydrated: true,
          version: -1
        }
    })
  })

  it('changes cart redux state when item is added', () => {
    cy.itemToCart()
    cy.visit('/')
    cy.window().its('store').invoke('getState').its('cart.cartItems').should('have.length', 1)
  })
})