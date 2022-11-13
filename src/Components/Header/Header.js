import React, { Component } from "react";
import Form from "../InputForm/InputForm"
import './Header.css'

const Header = ({ searchWord }) => {

  return (
    <header className="app-head">
      <button className="goToSaved">Saved Words</button>
      <Form className="search-box" searchWord={searchWord}/>
    </header>
  )
}

export default Header