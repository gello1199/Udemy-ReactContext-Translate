import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {

    state = {
        language: 'english'
    }

    // onLanguageChange = language => {
    //     this.setState({ language: language })
    // }
    // refactor below since key and value are the same

    onLanguageChange = language => {
        this.setState({ language })
    }

    render() {
        return (
            <div className="ui container">
                
                <ColorContext.Provider value={"red"}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;
