import React from 'react';
import './checkout.styles.scss';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'


function CheckoutPage({ cartItems, total }) {
    return (
        <div style={{ border: '1px solid black' }} className='checkout-page'>
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
                {/* <div className='header-block'>
                    <span>Size</span>
                </div> */}
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }

            <div className='total'>
                <span>TOTAL:${total}</span>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);
