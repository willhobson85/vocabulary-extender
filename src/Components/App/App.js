import './App.css';
import React, { Component } from 'react';
import MainContainer from '../MainPage/MainPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <main className='home'>
        <h1>This will contain the main container</h1>
        <h2>Also the form</h2>
        <MainContainer />
      </main>
    );
  }

}

export default App;
