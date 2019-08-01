import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import Header from '../components/header/header';
import AuthPage from '../pages/auth/auth-page';
import CheckoutPage from '../pages/checkout/checkout';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions.js';
import { selectCurrentUser } from '../redux/user/user.selectors';

import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

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
        addCollectionAndDocuments('collections', collectionsArray);
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <AuthPage />
              )}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);