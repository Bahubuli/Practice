// styles and images
import './Navbar.css'
import Temple from '../assets/temple.svg'

//
import Login from  '../pages/Login/Login'
import Signup from  '../pages/Signup/Signup'
import {useLogout} from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

import {Link} from 'react-router-dom';

export default function Navbar() {

    const {logout,isPending} = useLogout();
    const {user} = useAuthContext();

  return (
    <div className = "navbar">
        <ul>
            <li className = "logo">
                <img src = {Temple} alt = "Project App"/>
                <span>Project App</span>
            </li>
            {!user && <>
            {!user && <li><Link to = "/login">Login</Link></li>}
            {!user && <li><Link to = "/signup">Signup</Link></li>}
            </>}

            {user && <>
            {!isPending && <li><button className = "btn" onClick = {logout}>Logout</button></li>}
            {isPending && <li><button className = "btn" disabled>Logging out...</button></li>}
            </>}
        </ul>
    </div>
  )
}
