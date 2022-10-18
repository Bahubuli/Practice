import React from 'react'
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import SearchBar from '../Pages/searchBar/SearchBar';
import './Navbar.css'

export default function Navbar() {
  return (
      <div className = "navbar">

          <nav>
              <Link to="/" className = "brand">
                    <h1>Cooking Ninja</h1>
              </Link>
                <SearchBar/>
              <Link to="/create">
                  Create Recipe
              </Link>
          </nav>
    </div>
  )
}
