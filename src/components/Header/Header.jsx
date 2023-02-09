import CartWidget from "../CartWidget/CartWidget"
import {Navbar} from "../Navbar/Navbar"

const Header = () =>{
  return(
      <div style={{display:"flex" , width:"100%", height:"20vh", justifyContent:"space-between", alignItems:"center", backgroundColor:"lightblue"}}>
          <img style={{width:"8%"}} src="https://res.cloudinary.com/ds1zblpny/image/upload/v1675947732/Mis%20Imagenes/logo2_twym2n.png" alt="" />
          <Navbar /> 
          <CartWidget />
      </div>
  )
}

export default Header