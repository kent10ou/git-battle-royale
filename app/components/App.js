import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Nav from './Nav';
// var Popular = require('./Popular');
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route path='/popular' component={Popular} />
                        // if someone goes to a path that is not one of those -> 404!
                        <Route render={function () {
                            return <p>404! Page Not Found!</p>
                        }} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;