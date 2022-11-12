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
      savedForLater: [],
      errorMessage: ''
    }
  }

  searchWord = (word) => {
    fetchData(word.word)
    .then(data => {
      data.id = word.id
      data.word = word.word
      this.setState({wordList: [...this.state.wordList, data]})
    })
    .catch(err => console.log(err))
  }

  removeTile = (id) => {
    const removeTile = this.state.wordList.filter(card => card.id !== id)
    this.setState({wordList: removeTile})
  }

  //save method (need to pass into MainContainer)
  
  render() {
    return (
      <main className='home'>
        <h1>This will contain the main container</h1>
        <Form  searchWord={this.searchWord} />
        <MainContainer wordList={this.state.wordList} removeTile={this.removeTile} errorMessage={this.state.errorMessage} />
      </main>
    );
  }

}

export default App;
