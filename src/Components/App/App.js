import './App.css';
import React, { Component } from 'react';
import MainContainer from '../MainPage/MainPage';
import Form from "../InputForm/InputForm"
import { fetchData } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      wordList: [],
      savedForLater: []
    }
  }

  searchWord(word) {
    fetchData(word.word)
    .then(data => {
      console.log(data);
      let properties = Object.keys(data);
      let results = properties.map((result) => data[result].syn)
      console.log(results.flat())
      this.setState({wordList: [...this.state.wordList, ...results]})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <main className='home'>
        <h1>This will contain the main container</h1>
        <Form  searchWord={this.searchWord} />
        <MainContainer wordList={this.state.wordList} />
      </main>
    );
  }

}

export default App;
