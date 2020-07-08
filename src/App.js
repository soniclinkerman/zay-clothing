import React from 'react';
import './App.css';
import HomePage from './pages/home/homepage.component';
import {Switch, Route, Link} from "react-router-dom";
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
 
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        {/* <Route exact path="/" component={HomePage}/> */}
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
