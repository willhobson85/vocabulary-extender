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
      // I need wordlist to hold objects with a key of the word searched, and the value is an object of the results. If I can pass the state from InputForm's getWord method, I can use that for the id and should be able to get the key, or I need to pass the results from searchWord here to InputForm to be the value of a key I should be able to create there.
      savedForLater: []
    }
  }

  searchWord = (word) => {
    console.log('word', word)
    fetchData(word.word)
    .then(data => {
      console.log('data', data)
      // let properties = Object.keys(data);
      // let results = properties.map((result) => data[result])
      this.setState({wordList: [...this.state.wordList, {word: data}]})
    })
    .catch(err => console.log(err))
  }

  removeTile = (id) => {
    const removeTile = this.state.wordList.filter(card => card.id != id)
    this.setState({wordList: removeTile})
  }
  
  render() {
    console.log('state', this.state.wordList)
    return (
      <main className='home'>
        <h1>This will contain the main container</h1>
        <Form  searchWord={this.searchWord} />
        <MainContainer wordList={this.state.wordList} removeTile={this.removeTile} />
      </main>
    );
  }

}

export default App;
