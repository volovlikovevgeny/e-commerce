import React from 'react';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component/sign-in-and-sign-up.component';

import MapBox from './components/mapbox/mapbox.component'

import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


import Particles from 'react-particles-js';



import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props

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
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Particles
          className='particles'
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 1
                }
              }
            }
          }} />
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shoppage' component={Shoppage} />
          <Route path='/contacts' component={MapBox} />

          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToprops = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToprops, mapDispatchToProps)(App);