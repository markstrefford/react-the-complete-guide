import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

  
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Magic Mark', age: 47},
      { name: 'Tom', age: 11},
      { name: 'Zac', age: 9},
      { name: 'Sophie', age: 21}
    ]});

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Marky Mark', age: 47},
        { name: 'Tom', age: 11},
        { name: 'Zac', age: 9},
        { name: 'Sophie', age: 21}
      ]
    })};

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
    </div>
  );
  
}

export default app;


