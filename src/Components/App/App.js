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
      wordList: [
        {
          noun: {
            syn: ["hello", "hullo", "howdy", "how-do-you-do", "Hawaii", "Hawai'i", "Aloha State", "HI", "American state", "greeting", "salutation"]
          },
          id: 1668366024888,
          word: "hi"
        }, {
          noun: {
            ant: ["foe"],
            syn: ["ally", "acquaintance", "supporter", "protagonist", "champion", "admirer", "booster", "Friend", "Quaker", "advocate", "advocator", "associate", "Christian", "exponent", "individual", "mortal", "person", "proponent", "somebody", "someone", "soul"]
          },
            word: "friend",
            id: 1668366024889
        }
        
      ],
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
    if(!this.state.savedWords.find(card => card.id)) {
      const saveCard = this.state.wordList.filter(card => card.id === id).flat()
    
      this.setState({savedWords: [...this.state.savedWords, saveCard[0]]})
    } else {
      alert('already saved')
    }
  }

  unsaveWord = (id) => {
    const unsave = this.state.savedWords.filter(card => card.id !== id)
    this.setState({savedWords: unsave})
  }
  
  render() {
    console.log(this.state.wordList)
    return (
      <main className='home'>
          <Header searchWord={this.searchWord}/>
          <Switch>
            <Route exact path="/savedPage" render={() => <SavedContainer savedWords={this.state.savedWords} saveTile={this.saveTile} unsaveWord={this.unsaveWord} />} />
            <Route path="/" render={() => <MainContainer wordList={this.state.wordList} saveTile={this.saveTile} removeTile={this.removeTile} />} />
          </Switch>
          <Footer />
      </main>
    );
  }
  
}

export default App;
