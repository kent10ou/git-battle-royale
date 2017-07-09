import React from 'react';
// var Popular = require('./Popular');
import Popular from './Popular';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

module.exports = App;