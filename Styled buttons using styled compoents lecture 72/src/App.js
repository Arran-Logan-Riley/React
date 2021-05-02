import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? "red" : "green"};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? "salmon" : "lightgreen"};
    color: black;
  }
`


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //create a new Java obj
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  deletePersonHandler = (personIndex) => {
    //method to delete a person, taking in index from an anonomous method
    const persons = [...this.state.persons] //spread operator to avoid refrence types 
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    //get the current display status
    const doShowPerson = this.state.showPersons;
    //I then set the show status to what do status is not
    this.setState({ showPersons: !doShowPerson });
  }



  render() {

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }

    }

    //a variable to hold the JSX code when the if statement is true, this is then rendererd in the return statement
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Map to an from JS obj to obj with JSX objects in it (best way to render listed data)  */}
          {this.state.persons.map((person, index) => {
            return <Person
              //create an anonomous function so it is not called on initalization, but is still there
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}>
            </Person>
          })}
        </div>
      );
      //accessing the CSS obj to change the color to red
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
    }

    //init a empty classes variable so we can make it dynamic
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Person
          </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
