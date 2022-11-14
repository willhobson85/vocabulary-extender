import React, { Component } from "react";
import "./InputForm.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      word: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  getWord = event => {
      event.preventDefault()
      const newWord = {
          id: Date.now(),
          ...this.state
      }
      this.props.searchWord(newWord)
      this.resetForm()
  }

  resetForm = () => {
      this.setState({ word: ''})
  }

  render() {
    return (
      <form className="input-form" onSubmit={event => this.getWord(event)}>
         <input
            type='text'
            placeholder='Find a word'
            name='word'
            required
            value={this.state.word}
            onChange={event => this.handleChange(event)}
            />
          <button value="Search" type='submit'>Search</button>
      </form>
    )
  }
}

export default Form;