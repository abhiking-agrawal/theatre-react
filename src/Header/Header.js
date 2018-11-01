import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {}
    render() {
        return (
            <div class="d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 class="my-0 mr-md-auto font-weight-normal">Theatre</h5>
                <Link class="btn btn-outline-primary" to="/login">Login</Link>
            </div>
        );
    }
}


export default Header;