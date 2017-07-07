import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

// state
// lifecycle events
// UI

class App extends React.Component {
    render () {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
