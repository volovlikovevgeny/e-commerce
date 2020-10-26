import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartDropDownContainer,
    CartItemsContainer,
    CartDropdownButton,
    EmptyMessageContainer
} from './cart-dropdown.styles';



const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropDownContainer className='cart-dropdown'>
            <CartItemsContainer className='cart-items'>
                {cartItems.length ? (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : (<EmptyMessageContainer className='empty-message'>Your cart is Empty</EmptyMessageContainer>)
                }
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden())
                }}>
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropDownContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));