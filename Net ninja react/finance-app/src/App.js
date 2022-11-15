import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Signup from '../src/pages/signup/Signup'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>

                <Route  path = "/Login">
                    <Login/>
                </Route>

                <Route  path = "/Signup">
                    <Signup/>
                </Route>
            </Switch>

        </BrowserRouter>

    </div>
  );
}

export default App
