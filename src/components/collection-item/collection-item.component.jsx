import React from 'react';
import { connect } from 'react-redux';


import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions'



const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price, } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer className='collection-footer'>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>ADD ITEM</AddButton>
        </CollectionItemContainer>

    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);
