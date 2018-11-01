import React, { Component } from 'react';
import Home from './Home'
import Login from './Login'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login"  component={Login}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
