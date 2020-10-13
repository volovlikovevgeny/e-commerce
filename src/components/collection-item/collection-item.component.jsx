import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';


const CollectionItem = ({ name, imageUrl, price, }) => {

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton inverted>ADD ITEM</CustomButton>
        </div>

    )
}



export default CollectionItem;
