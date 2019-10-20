import React, { Component } from 'react';
import User from './User'
import Form1 from './form'
import Header from './header'


class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <Header />
                <User
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form1 handleSubmit={this.handleSubmit}
                 />
            </div>
        );
    }
}

export default App;