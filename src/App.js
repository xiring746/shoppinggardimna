import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage//homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css';


const ContactPage = () => (
           <div>
                <h1>This is a ContactPage</h1>
           
           </div>
)
function App(){
                  return(
                         <div>
                              <Header />
                              <Switch>
                              <Route exact path='/' component={HomePage} />
                              <Route exact path="/shop" component={ShopPage} />
                              <Route exact path="/contact" component={ContactPage} />
                              </Switch>
                         </div>
                  )
}
export default App;
