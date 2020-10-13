import React from 'react';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component/sign-in-and-sign-up.component';


import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';




import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { thisIsExampleofDispatchProps } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          thisIsExampleofDispatchProps({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      thisIsExampleofDispatchProps(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shoppage' component={Shoppage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInAndSignUpPage />
                )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  thisIsExampleofDispatchProps: function (user) {
    dispatch(setCurrentUser(user))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
