import React from "react";
import Tile from "../Tile/Tile.js"
import './SavedPage.css'

const SavedContainer = ({ unsaveWord, saveTile, savedWords }) => {

  const tiles = savedWords.map(newWord => <Tile key={newWord.id} props={newWord} unsaveWord={unsaveWord} saveTile={saveTile} saved={true} />)

  return (
    <div className="tile-container">
      {tiles}
    </div>
  )
}

export default SavedContainer