import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
})

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div data-cy={`${name}`} className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div data-cy={`remove-item-${name}`} className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span data-cy={`quantity-${name}`} className='value'>
            {quantity}
          </span>
        <div data-cy={`add-item-${name}`} className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div data-cy={`clear-item-${name}`} className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(CheckoutItem);