import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
       Home
       <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;
