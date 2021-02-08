import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { updateCollection } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import './shoppage.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class Shoppage extends React.Component {
    componentDidMount() { 

        const {fetchCollectionStartAsync} = this.props

        fetchCollectionStartAsync();
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className='shoppage'>
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                )} />
                <Route path={`${match.path}/:collectionId`}
                    render={props => (<CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />)}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const mapdDispatchToProp = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapdDispatchToProp)(Shoppage);

