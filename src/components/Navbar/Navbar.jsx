
import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"

export const Navbar = () =>{
    return (
        <ul className="container-Navbar">
            <ListNavbar title="Aros Cortos"/>
            <ListNavbar title="Aros Lrgos"/>
            <ListNavbar title="Collares Azules"/>
            <ListNavbar title="Collares Rojos"/>
            <ListNavbar title="Collares Negros"/>
        </ul>
    )
}

// export default Navbar