import React from 'react';
import './App.css';
import HomePage from './pages/home/homepage.component';
import {Switch, Route, Link} from "react-router-dom";

const HatsPage = () => {
  return(
    <h1>Hats</h1>
  )
}
  
  
function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={HomePage}/> */}
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={HatsPage}/>
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
