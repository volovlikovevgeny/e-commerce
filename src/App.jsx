import React, { lazy, Suspense } from 'react';

import Header from './components/header/header.component';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';
import { auth, createUserProfileDocument, addCollectionAndDocument } from './firebase/firebase.utils';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up.component/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkpage/checkout.component'))
const MapBox = lazy(() => import('./components/mapbox/mapbox.component'));

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser, collectionArray } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocument('collection', collectionArray)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contacts' component={MapBox} />
            <Route exact path='/checkout' component={CheckoutPage} />

            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);