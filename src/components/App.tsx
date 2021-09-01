import React, { Component } from 'react';
import MainButton from './MainButton';

class App extends Component {
  render() {
    return (
      <div className="content">
        <h1>My React App</h1>
        <MainButton />
      </div>
    )
  }
}

export default App;