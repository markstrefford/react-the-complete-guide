import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Magic Mark', age: 47 },
      { name: 'Tom', age: 11 },
      { name: 'Zac', age: 9 },
      { name: 'Sophie', age: 21 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 47 },
        { name: 'Tom', age: 11 },
        { name: 'Zac', age: 9 },
        { name: 'Sophie', age: 21 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Mark', age: 47 },
        { name: event.target.value, age: 11 },
        { name: 'Zac', age: 9 },
        { name: 'Sophie', age: 21 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!!!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Marky Mark!')}>Switch Name</button>
        <Person
          click={this.switchNameHandler.bind(this, 'Mark')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          changed={this.nameChangedHandler}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
