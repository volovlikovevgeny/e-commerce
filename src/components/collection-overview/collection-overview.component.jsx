import React from 'react';

import { connect } from 'react-redux';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) =>
                    <CollectionPreview key={id} {...otherCollectionProps} />
                )
            }
        </CollectionOverviewContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);

