import React from 'react';

import './shoppage.styles.scss';

import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const Shoppage = ({ match }) => {
    return (
        <div className='shoppage'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default Shoppage;

