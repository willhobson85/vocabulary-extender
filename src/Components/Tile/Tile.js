import React from "react";
import './Tile.css'

function Tile( {props, removeTile, saveTile} ) {
  const displayResults = (partOfSpeech) => {
    let synonyms = ''
    let antonyms = ''
    if (!props[partOfSpeech]) {
      return null
    }
    if (props[partOfSpeech].syn) {
      synonyms = 
      <>
        <h4>Syn: </h4>
        <p>{props[partOfSpeech].syn.join(', ')}</p>
      </>
    }
    if (props[partOfSpeech].ant) {
      antonyms = 
      <>
        <h4>Ant: </h4>
        <p>{props[partOfSpeech].ant.join(', ')}</p>
      </>
    }
    
    return (
      <>
        <h3 className="tile-heads">{partOfSpeech}</h3>
        {synonyms}
        {antonyms}
      </> 
    )
  }

  return (
      <div className="tile">
          <h2 className="tile-title">{props.word}</h2>
          {displayResults('adjective')}
          {displayResults('noun')}
          {displayResults('adverb')}
          {displayResults('verb')}
          <div className="buttons">
            <button className='saveButton' onClick={() => saveTile(props.id)}>Save for later</button>
            <button className='removeButton' onClick={() => removeTile(props.id)}>Remove</button>
          </div>
      </div>
  )
}

export default Tile