import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Nav from './Nav';
// var Popular = require('./Popular');
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Route path='/battle' component={Battle} />
                    <Route path='/popular' component={Popular} />
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;