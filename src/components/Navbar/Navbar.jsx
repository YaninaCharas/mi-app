import ListNavbar from "../ListNavbar/ListNavbar"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () =>{
  return (
    <ul className="containerNavbar">
      <Link to="/">
        <ListNavbar title="Todos"/>
      </Link>
      <Link to="/category/Casual">
        <ListNavbar title="Casual"/>
      </Link>
      <Link to="/category/Fiesta">
        <ListNavbar title="Fiesta"/>
      </Link>
    </ul>
  )
}

// export default Navbar