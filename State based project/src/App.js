import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'; //import the file to be used
import Person2 from './Person/Person2.js'

const app = props => {
  const [currentPersonsState, setPersonsState] = useState({//currentPersonsState gives you access to the current state(current data)
    persons: [
      { name: 'Max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
  });

  const [otherState, setOtherState] = useState('some other state') //using array destructuring to get the current state with the first input

  console.log(currentPersonsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!')
    //dont do this -currentPersonsState.persons[0].name = "Maximilian" //this will only with with a => function
    //use set state to manipulate states
    setPersonsState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      
    }
    ) //this is a method used to set states. By using the word persons we add it as a property
  };

  //this html code (jsx) compiles the code weitten below. the JSX is just easier to write
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={currentPersonsState.persons[0].name} age={currentPersonsState.persons[0].age} />
      <Person name={currentPersonsState.persons[1].name} age={currentPersonsState.persons[1].age} >My Hobbies are: Racing</Person>
      <Person name={currentPersonsState.persons[2].name} age={currentPersonsState.persons[2].age} />
      <Person2 />
    </div>

  );
  //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'does this work now?'));
}

export default app;




