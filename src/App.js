import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage//homepage.component.jsx';
import './App.css';



const HatsPage = () => (
                        <div>
                             <h1>Welcome To Home Page</h1>
                        </div>
)
function App(){
                  return(
                         <div>
                              <Switch>
                              <Route exact path='/' component={HomePage} />
                              <Route exact path="/hats" component={HatsPage} />
                              </Switch>
                         </div>
                  )
}
export default App;
