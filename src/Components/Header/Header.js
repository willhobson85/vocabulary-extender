import React, { Component } from "react";
import Form from "../InputForm/InputForm"
import './Header.css'

const Header = ({ searchWord }) => {
  // I want a logo, my saved button, and the word search
  return (
    <header className="app-head">
      <button className="goToSaved">Saved Words</button>
      <Form className="search-box" searchWord={searchWord}/>
    </header>
  )
}

export default Header