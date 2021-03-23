import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage//homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'; 
import './App.css';


const ContactPage = () => (
           <div>
                <h1>This is a ContactPage</h1>
           
           </div>
)
class App extends React.Component{
     constructor(props){
          super(props);
          this.state = {
                         currentUser: 'null'
          }
     }
     unsubscribeFromAuth = null
     componentDidMount(){
                this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
                     createUserProfileDocument(user);
                    //  this.setState({ currentUser: user });
                    //  console.log(user);
                });
     }
     componentWillUnmount(){
           this.unsubscribeFromAuth();
     }
     render(){
          return(
               <div>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/signin" component={SignInAndSignUpPage} />
                    </Switch>
               </div>
        )
     }     
}
export default App;
