import React, { Component } from 'react';

class App extends Component {

    state = {
        language: 'english'
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a Language:
                    <i className="flag us" />
                    <i className="flag nl" />
                </div>
            </div>
        );
    }
}

export default App;
