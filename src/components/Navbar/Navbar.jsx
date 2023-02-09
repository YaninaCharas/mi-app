import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"

export const Navbar = () =>{
  return (
    <ul className="container-Navbar">
      <ListNavbar title="Casual"/>
      <ListNavbar title="Fiesta"/>
      <ListNavbar title="Aros"/>
      <ListNavbar title="Collares"/>
    </ul>
  )
}

// export default Navbar