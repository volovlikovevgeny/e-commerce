import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='qnt-item'>
                    <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
                    <span className='value'>{quantity}</span>
                    <div onClick={() => addItem(cartItem)} className='arrow'  >&#10095;</div>
                </div>
                <div className='size'>
                    <select >
                        <option value="volvo">S</option>
                        <option value="saab">M</option>
                        <option value="opel">L</option>
                        <option value="audi">XL</option>
                        <option value="audi">XXL</option>
                    </select>
                </div>
            </span>
            <span className='price'>${price}</span>
            <div onClick={() => clearItem(cartItem)} className='remove-button'>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);