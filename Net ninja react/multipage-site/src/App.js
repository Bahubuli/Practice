import './App.css'

import { BrowserRouter, Route,Switch } from 'react-router-dom';

//page components

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'


function App() {
  return (
      <div className="App">
        <BrowserRouter>
                <nav>
                    <h1>My Articles</h1>
              </nav>

                <Route exact path="/">
                <Home/>
                </Route>

                <Route path="/about">
                <About/>
                </Route>

                <Route path="/contact">
                <Contact/>
                </Route>

        </BrowserRouter>
    </div>
  );
}

export default App


// react router match the component from top to bottom
// so only home is showing right now
// use exact in from of the path
// Switch will select only one route
