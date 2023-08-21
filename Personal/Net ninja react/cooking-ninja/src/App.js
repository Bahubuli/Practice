import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing component pages
import Navbar from "./components/Navbar"
import Home from './Pages/home/Home'
import Create from './Pages/create/Create'
import Search from './Pages/search/Search'
import Recipe from './Pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector';
//styles
import './App.css'
import {useTheme} from './Hooks/useTheme';

function App() {


const {mode} = useTheme();

  return (
      <div className={`App ${mode}`}>


          <BrowserRouter>

                <Navbar/>
                <ThemeSelector/>
              <Switch>

                  <Route exact path="/">
                      <Home/>
                  </Route>
                  <Route path="/Create">
                      <Create/>
                  </Route>
                  <Route path="/Search">
                      <Search/>
                  </Route>
                  <Route path="/Recipes/:id">
                      <Recipe/>
                  </Route>

              </Switch>


          </BrowserRouter>
    </div>
  );
}

export default App
