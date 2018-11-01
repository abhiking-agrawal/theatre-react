import React, { Component } from 'react';
import Home from '../Home'
import Aux from '../hoc/hoc'
import Login from '../Login'
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Header />
                
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                
            </Aux>
        );
    }
}

export default Layout;