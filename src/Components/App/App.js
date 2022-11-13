import './App.css';
import React, { Component } from 'react';
import MainContainer from '../MainPage/MainPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from "../InputForm/InputForm"
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
        id: 1668366024888,
        noun: {
          syn: ["hello", "hullo", "howdy", "how-do-you-do", "Hawaii", "Hawai'i", "Aloha State", "HI", "American state", "greeting", "salutation"]
        },
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
    const saveCard = this.state.wordList.filter(card => card.id === id)
    this.setState({savedWords: [...this.state.savedWords, saveCard]})
  }
  
  render() {
    return (
      <main className='home'>
        <Router>
          <Header searchWord={this.searchWord}/>
          <Switch>
            <Route path="/savedWords">

            </Route>
            <Route path="/">
              <MainContainer wordList={this.state.wordList} saveTile={this.saveTile} removeTile={this.removeTile} errorMessage={this.state.errorMessage} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </main>
    );
  }
  
}

export default App;
