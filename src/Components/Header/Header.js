import React, { Component } from "react";
import Form from "../InputForm/InputForm"
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ searchWord }) => {

  return (
    <header className="app-head">
      <div className="navigation">
        <Link to="/">
          <button className="goHome">All Words</button>
        </Link>
        <Link to="/savedPage">
          <button className="goToSaved">Saved Words</button>
        </Link>
      </div>
      <Form className="search-box" searchWord={searchWord}/>
    </header>
  )
}

export default Header