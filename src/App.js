import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
     persons: [
       { name: 'Magic Mark', age: 47},
       { name: 'Tom', age: 11},
       { name: 'Zac', age: 9},
       { name: 'Sophie', age: 21}
     ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Marky Mark', age: 47},
        { name: 'Tom', age: 11},
        { name: 'Zac', age: 9},
        { name: 'Sophie', age: 21}
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
