import React from 'react';
import { ShopContainer, ShoppingIconSvg, ItemCountContainer } from './shop-icon.styles';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <ShopContainer onClick={toggleCartHidden}>
            <ShoppingIconSvg className='shopping-icon' />
            <ItemCountContainer className='item-count'>{itemCount}</ItemCountContainer>
        </ShopContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
