import React from "react";
import Tile from "../Tile/Tile.js"
import './SavedPage.css'

const SavedContainer = ({ wordList, removeTile, saveTile, savedWords }) => {

  const tiles = savedWords.map(newWord => <Tile key={newWord.id} props={newWord} removeTile={removeTile} saveTile={saveTile}/>)

  return (
    <div className="tile-container">
      {tiles}
    </div>
  )
}

export default SavedContainer