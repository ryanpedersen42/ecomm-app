import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ufxQWqckqXBkFOQFG4XvKsMp00BJZLGcDy';

  const onToken = token => {
    console.log(token);
    alert('payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='ecomm-app'
      billingAddress
      shippingAddress
      amount={priceForStripe}
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
       />
  )
}

export default StripeCheckoutButton;