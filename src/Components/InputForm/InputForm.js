import React, { Component } from "react";
import "./InputForm.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      word: []
    }
  }

  handleChange = event => {
    console.log('event name', event.target.name)
    console.log('event value', event.target.value)
    this.setState({ [event.target.name]: event.target.value })
    // event.target.name is "word" from 42. I need to use the value for the key in set state, and pass the results from the fetch as the value for setState
    // I think I just need to setState in the getWord method. 
    // Or I need to pass the name and id from newWord up to app.
  }

  getWord = event => {
      event.preventDefault()
      const newWord = {
          id: Date.now(),
          ...this.state
      }
      this.props.searchWord(newWord)
      console.log(newWord)
      this.resetForm()
  }

  resetForm = () => {
      this.setState({ word: ''})
  }

  render() {
    return (
      <form className="input-form">
         <input
                type='text'
                placeholder='Find a word'
                name='word'
                value={this.state.word}
                onChange={event => this.handleChange(event)}
                />
                <button onClick={event => this.getWord(event)}>Search</button>
      </form>
    )
  }
}

export default Form;