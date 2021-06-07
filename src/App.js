import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import HomePage from './pages/homepage//homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'; 
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import './App.css';


const ContactPage = () => (
           <div>
                <h1>This is a ContactPage</h1>
           </div>
)
class App extends React.Component{
     unsubscribeFromAuth = null;
     componentDidMount(){
                
                this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                     if( userAuth ){
                          const userRef = await createUserProfileDocument(userAuth);
                          userRef.onSnapshot(snapShot => {
                                   this.props.setCurrentUser({
                                          id: snapShot.id,
                                          ...snapShot.data()
                                     });
                                });
                     }
                           this.props.setCurrentUser(userAuth);
                     
                });
     }
     componentWillUnmount(){
           this.unsubscribeFromAuth();
     }
     render(){
          return(
               <div>
                    <Header />
                    <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route 
                    exact 
                    path="/signin" 
                    render={() =>
                          this.props.currentUser ? (
                               <Redirect to="/" />
                          ) : ( 
                          <SignInAndSignUpPage />
                          )
                    }
                    />
                    </Switch>
               </div>
        )
     }     
}

const mapStateToProps = createStructuredSelector({
           currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
        setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
