import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles'


const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer className='checkout-item'>
            <ImageContainer className='image-container'>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer className='name'>{name}</TextContainer>
            <QuantityContainer className='quantity'>
                <div className='qnt-item'>
                    <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
                    <span className='value'>{quantity}</span>
                    <div onClick={() => addItem(cartItem)} className='arrow'  >&#10095;</div>
                </div>
            </QuantityContainer>
            <TextContainer className='price'>${price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)} className='remove-button'>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);