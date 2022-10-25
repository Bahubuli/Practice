import React from 'react';
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';

import SearchBar from '../Pages/searchBar/SearchBar';
import './Navbar.css'
import {useTheme} from '../Hooks/useTheme'
export default function Navbar() {

    const {color, changeColor } = useTheme()

  return (
      <div className = "navbar" style = {{background: color}}>

          <nav onClick ={()=>changeColor('red')}>
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
