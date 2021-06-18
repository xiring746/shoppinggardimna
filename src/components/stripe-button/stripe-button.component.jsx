import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
     const priceForStripe = price * 100;
     const publishableKey = 'pk_test_51J3e4hKGHVCiSlKGhdv9BrGL4RV6PCOnzKdSnsVXHaBK0sG8l6ZBjM4MpYOzoQPDjHnsaudcAo67zXxhhoxENOMn00kJV8Asbj';
     const onToken = token => {
           alert('payment successfull');
     }
     return (
           <StripeCheckout
                   label='Pay Now'
                   name='CRWN Clothing Ltd.'
                   billingAddress
                   shippingAddress
                   image='https://svgshare.com/i/CUz.svg'
                   description={`Your total is $${price}`}
                   amount={priceForStripe}
                   panelLabel='Pay Now'
                   token={onToken}
                   stripeKey={publishableKey}

           />
     )
}
export default StripeCheckoutButton;