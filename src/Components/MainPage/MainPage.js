import React from "react";
import Tile from "../Tile/Tile.js"
import './MainPage.css'

const MainContainer = ({ wordList, removeTile, saveTile }) => {

  const tiles = wordList.map(newWord => <Tile key={newWord.id} props={newWord} removeTile={removeTile} saveTile={saveTile}/>)

  return (
    <div className="tile-container">
      {tiles}
    </div>
  )
}

export default MainContainer