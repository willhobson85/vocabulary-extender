import './App.css';
import React, { Component } from 'react';
import MainContainer from '../MainPage/MainPage';
import SavedContainer from '../SavedPage/SavedPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { fetchData } from '../../apiCalls';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      wordList: [{
        noun: {
          syn: ["hello", "hullo", "howdy", "how-do-you-do", "Hawaii", "Hawai'i", "Aloha State", "HI", "American state", "greeting", "salutation"]
        },
        id: 1668366024888,
        word: "hi"
      }],
      savedWords: [],
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

  saveTile = (id) => {
    const saveCard = this.state.wordList.filter(card => card.id === id).flat()
    this.setState({savedWords: [...this.state.savedWords, saveCard[0]]})
  }
  
  render() {
    console.log('saved words', this.state.savedWords)
    console.log('word list', this.state.wordList)
    return (
      <main className='home'>
        {/* <Router> */}
          <Header searchWord={this.searchWord}/>
          <Switch>
            <Route exact path="/savedPage" render={() => <SavedContainer savedWords={this.state.savedWords} saveTile={this.saveTile} removeTile={this.removeTile} errorMessage={this.state.errorMessage} />} />
            <Route path="/" render={() => <MainContainer wordList={this.state.wordList} saveTile={this.saveTile} removeTile={this.removeTile} errorMessage={this.state.errorMessage} />} />
          </Switch>
          <Footer />
        {/* </Router> */}
      </main>
    );
  }
  
}

export default App;
