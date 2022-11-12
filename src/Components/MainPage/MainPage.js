import React from "react";
import Tile from "../Tile/Tile.js"
import './MainPage.css'

const MainContainer = ({ wordList, removeTile }) => {

  const tiles = wordList.map(newWord => <Tile key={newWord.id} myStuff={newWord} removeTile={removeTile} />)

  return (
    <div className="tile-container">
      {tiles}
    </div>
  )
}

export default MainContainer