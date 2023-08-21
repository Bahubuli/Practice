import './App.css'
import { useAuthContext } from './hooks/useAuthContext';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Signup from '../src/pages/signup/Signup'
import Navbar from './components/Navbar';
function App() {
    const {authIsReady,user} = useAuthContext();
  return (
    <div className="App">

        {authIsReady && (
            <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path = "/">
                    {!user && <Redirect to = "/Login"/>}
                    {user && <Home/>}
                </Route>

                <Route  path = "/Login">
                    {user && <Redirect to="/"/>}
                    {!user &&  <Login/>}
                </Route>

                <Route  path = "/Signup">
                    {user && <Redirect to="/"/>}
                    {!user &&   <Signup/>}
                </Route>

            </Switch>

        </BrowserRouter>

        )}


    </div>
  )
}

export default App
