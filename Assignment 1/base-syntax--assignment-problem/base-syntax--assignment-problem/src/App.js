import React, { Component } from 'react';
import './App.css';
import UserOutput from './underIO/UserOutput';
import UserInput from './underIO/UserInput ';

class App extends Component {
  state = {
    users: [
      {
        userName: "add name"
      },
      {
        userName: "the other one"
      }
    ]
  }

  changeStateHandler = (event) => {
    this.setState({
      users: [
        {
          userName: event.target.value
        },
        {
          userName: "the other one"
        }
      ]
    })
  }


  render() {
    const style = {
      
    }
    return (
      <div className="App">
        <UserOutput userName={this.state.users[0].userName}></UserOutput>
        <UserOutput userName={this.state.users[1].userName}></UserOutput>
        <UserInput changed={this.changeStateHandler} userName={this.state.users[0].userName}></UserInput>
      </div>
    );
  }
}

export default App;
