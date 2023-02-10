import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import {Navbar} from "../Navbar/Navbar"

const Header = () =>{
  return(
      <div style={{
        display:"flex" , 
        width:"100%", 
        height:"10vh", 
        justifyContent:"space-around", 
        alignItems:"center", 
        backgroundColor:"white",
        border: "2px solid #7F669D",

        }}
        >
        <Link to={"/"}>
          <img style={{width:"10%"}} src="https://res.cloudinary.com/ds1zblpny/image/upload/v1675947732/Mis%20Imagenes/logo2_twym2n.png" alt="" />
        </Link>
        <Navbar /> 
        <CartWidget />
      </div>
  )
}

export default Header