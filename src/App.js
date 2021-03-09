import React from 'react';
import SearchBox from './component/searchbox/search.component.jsx';
import './App.css';

class App extends React.Component{
                 render(){
                          return(
                                 <div>
                                      <h1>Welcome To Shop</h1>
                                      <SearchBox />
                                 </div>
                          )
                 }
}

export default App;
