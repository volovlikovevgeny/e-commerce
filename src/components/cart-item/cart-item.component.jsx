import React from 'react';
import { CartItemContainer, ItemDetailsContainer, ItemImg } from './cart-item.styles';



const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer className='cart-item'>
        <ItemImg src={imageUrl} alt='item' />
        <ItemDetailsContainer className='item-details'>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);


export default CartItem;

