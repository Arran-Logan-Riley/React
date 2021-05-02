import React, { Component } from 'react';
import './App.css';
import Validationcomponent from './ValidationComponent/ValidationComponent';
import Charcomponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    id: 1,
    length: null,
    characters: [],
    text: null,
    error: null
  }

  inputChangeHandler = (event) => {
    //get the event length
    let errorMessage = "";
    let characters = "";

    if (event.target.value.length <= 2) {
      errorMessage = "Word is too short"
    } else if (event.target.value.length >= 5) {
      errorMessage = "word is too long"
    }

    characters = event.target.value.split("");

    const currentWord = event.target.value;

    const newLenthOfCurrentWrod = currentWord.length;
    this.setState({
      length: newLenthOfCurrentWrod,
      text: currentWord,
      error: errorMessage,
      characters: characters,
    })
    //console.log(this.state.characters);
  }

  deleteBoxHandler = (indexOfBox) => {
    //console.log(indexOfBox);
    const boxes = [...this.state.characters];

    boxes.splice(indexOfBox, 1);
    this.setState({
      characters: boxes,
      text: boxes.join(''),
      length: boxes.length
    });
  }

  render() {
    let boxes = (
      <div>
        {this.state.characters.map((character, index) => {
          //if the character is a space make character a dash instead. Note: This function creates the boxes
          if (character === " ") {
            character = "-"
          }
          return <Charcomponent
            character={character}
            key={index}
            click={() => this.deleteBoxHandler(index)}
          />
        })}
      </div>
    )
    return (
      <div className="App">
        <h1>Welcome to my dynamic website!</h1>
        <hr></hr>
        <h3>Please type in the input provided for magic</h3>
        <input onChange={(event) => this.inputChangeHandler(event)} value={this.state.text} />
        <p>Length of characters: {this.state.length}</p>
        <Validationcomponent error={this.state.error} txtlength={this.state.length}></Validationcomponent>
        {boxes}
        <hr></hr>
      </div>
    );
  }
}

export default App;
