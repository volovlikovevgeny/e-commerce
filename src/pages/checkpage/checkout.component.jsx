import React from 'react';
import './checkout.styles.scss';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

function CheckoutPage({ cartItems, total }) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description </span>
                </div>
                <div className='header-block'>
                    <span>Quantuity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className='total'> TOTAL:${total} </div>
            <div className='text-warning'>
                *Please use the folowing test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp:01/25 -CW:123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);
