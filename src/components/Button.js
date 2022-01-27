// Accessing data with Consumers
// use to access multiple context objects

import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }
                
            </ColorContext.Consumer>
        );
    }
}

export default Button;

// using this.contextType
// use to access a single context object

// import React, { Component } from 'react';
// import LanguageContext from '../contexts/LanguageContext';

// class Button extends Component {
//     static contextType = LanguageContext;

//     render() {
//         const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
//         return (
//             <button className="ui button primary">{text}</button>
//         );
//     }
// }

// export default Button;