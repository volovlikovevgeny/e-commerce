import React from 'react';

import './shoppage.styles.scss';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollection } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class Shoppage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromAuth = null;


    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collection');

        this.unsubscribeFromAuth = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollection(collectionsMap);
            this.setState({ loading: false })
            console.log(this.state);
        })
    }


    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shoppage'>
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                )} />
                <Route path={`${match.path}/:collectionId`}
                    render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)}
                />
            </div>
        )
    }
}


const mapdDispatchToProp = dispatch => ({
    updateCollection: collectionsMap =>
        dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapdDispatchToProp)(Shoppage);

