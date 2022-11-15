import { Link } from "react-router-dom";
import styles from './Navbar.module.css'


import { useLogout } from "../hooks/useLogout";

export default function Navbar() {

    const {logout} = useLogout();

  return (
    <nav className = {styles.navbar}>
       <ul>
        <li className = {styles.title}>
            Finance App
        </li>
        <li> <Link to ="/Login">Login</Link></li>
        <li> <Link to ="/Signup">Signup</Link></li>
        <li><button className = "btn" onClick = {logout}>Logout</button></li>
       </ul>
    </nav>
  )
}
