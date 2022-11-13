import React from "react";
import Tile from "../Tile/Tile.js"
import MainContainer from "../MainPage/MainPage.js";
import './SavedPage.css';
import { Link, useParams } from 'react-router-dom';

const SavedContainer = ({ wordList, savedWords, removeTile, saveTile, errorMessage }) => {

  let { id } = useParams();
  console.log(id);

  // if(id === 'savedWords') {
    const tiles = savedWords.map(newWord => <Tile key={newWord.id} props={newWord} removeTile={removeTile} saveTile={saveTile}/>)
  // } else {
  //   const tiles = wordList.map(newWord => <Tile key={newWord.id} props={newWord} removeTile={removeTile} saveTile={saveTile}/>)
  // }

  return (
    <div className="tile-container">
      { id="savedWords"
      ?<> <Link to="/">
          <button className="goHome">All Words</button>
        </Link>
        <MainContainer wordList={this.state.savedWords} saveTile={this.saveTile} removeTile={this.removeTile} errorMessage={this.state.errorMessage} /></>
      : <><Link to="/savedWords">
          <button className="goToSaved">Saved Words</button>
        </Link>
        <MainContainer wordList={this.state.wordList} saveTile={this.saveTile} removeTile={this.removeTile} errorMessage={this.state.errorMessage} /></>
      }
      { id="main"
      ?<> <Link to="/savedWords">
          <button className="goToSaved">Saved Words</button>
        </Link>
        <MainContainer 
          wordList={this.state.wordList} 
          saveTile={this.saveTile} 
          removeTile={this.removeTile} errorMessage={this.state.errorMessage} /></>
      : <><Link to="/main">
          <button className="goHome">All Words</button>
        </Link>
               <MainContainer 
               wordList={this.state.savedWords} saveTile={this.saveTile} removeTile={this.removeTile} errorMessage={this.state.errorMessage} /></>
      }
      {tiles}
    </div>
  )
}

export default SavedContainer