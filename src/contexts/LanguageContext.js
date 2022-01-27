import React from "react";

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { langage: 'english'}

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange }}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;
