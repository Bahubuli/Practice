import cart from '../assets/cart.png'
import logo from '../assets/logo.png'

import './Navbar.css'

export default function Navbar() {
  return (
    <div className = "navbar">


            <div className = "logo">
                <img className = "logo-img" src = {logo} alt = "Logo"/>
            </div>

            <div className = "cart">
                <img className  ="cart-img" src = {cart} alt = "cart" />
            </div>



    </div>
  )
}
