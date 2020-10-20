import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HWnT4LCxscUGfcoxxgzAphsQt91E2sFL6O5FgqBqYuoNfAjNsoIHcf6DjuTKMGnXWGaXVodHyDY1wUwBl2lUJ2C00ND4vsB9n';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='E-com'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/QhE.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
