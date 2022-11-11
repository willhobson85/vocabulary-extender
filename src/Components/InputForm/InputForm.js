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