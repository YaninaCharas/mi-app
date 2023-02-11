import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import {Navbar} from "../Navbar/Navbar"
import "./Header.css"

const Header = () =>{
  return(
      <div className="containerHeader">
        <Link to={"/"}>
          <img className="logo" src="https://res.cloudinary.com/ds1zblpny/image/upload/v1675947732/Mis%20Imagenes/logo2_twym2n.png" alt="" />
        </Link>
        <Navbar /> 
        <CartWidget />
      </div>
  )
}

export default Header