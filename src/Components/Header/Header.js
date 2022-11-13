import React, { Component } from "react";
import Form from "../InputForm/InputForm"
import './Header.css'

const Header = ({ searchWord }) => {
  // I want a logo, my saved button, and the word search
  return (
    <header className="app-head">
      <button className="goToSaved">Saved</button>
      {/* <Form searchWord={this.searchWord}/> */}
    </header>
  )
}

export default Header