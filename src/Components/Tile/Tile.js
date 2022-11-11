import React from "react";
import './Tile.css'

function Tile() {
  // still need to pass props here
  //word[partOfSpeech].syn
  //word[partOfSpeech].ant
  // I think I'll need to do a reduce to create sections on the tile
  // const wordDetails = props.reduce((acc, word) => {

  // }, {})
  return (
      <div className="tile">
          <h2>Tile Title</h2>
          <h3>Placeholder Text</h3>
          <button className='saveButton'>Save for later</button>
          <button className='removeButton'>Remove</button>
      </div>
  )
}

export default Tile