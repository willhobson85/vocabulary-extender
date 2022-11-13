import React, { Component } from "react";
import Form from "../InputForm/InputForm"
import './Header.css'
import { Link, useParams } from "react-router-dom"

const Header = ({ searchWord }) => {
  
  let { id } = useParams();
  
  return (
    <header className="app-head">
      {/* { id="savedWords" */}
      {/* ? <Link to="/"> */}
          {/* <button className="goHome">All Words</button> */}
        {/* </Link> : */}
       <Link to="/savedWords">
          <button className="goToSaved">Saved Words</button>
        </Link>
      {/* } */}
      <Form className="search-box" searchWord={searchWord}/>
    </header>
  )
}

export default Header