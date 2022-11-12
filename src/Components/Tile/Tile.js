import React from "react";
import './Tile.css'

function Tile( {myStuff, removeTile} ) {

  return (
      <div className="tile">
          <h2>{myStuff.word}</h2>

          {myStuff.adjective.syn.length > 0 ? 
          <>
            <h3>Adjective</h3>
            <h3>Syn: </h3>
            <p>{myStuff.adjective.syn.join(', ')}</p>
            <h3>Ant: </h3>
          </> : 'No results'}

          <button className='saveButton'>Save for later</button>
          <button className='removeButton' onClick={() => removeTile(myStuff.id)}>Remove</button>
      </div>
  )
}

export default Tile