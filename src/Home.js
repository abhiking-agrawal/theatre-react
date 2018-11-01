import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Home extends Component {
  getList = () => {
    console.log("Asdf")
    Axios.get('https://northwesttheatre.cf/Theatre/user/showlist')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  componentDidMount() {
    this.getList()
  }
  render() {
    return (
      <div className="App">

        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;
