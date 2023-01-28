
import CartWidget from "../CartWidget/CartWidget"
import {Navbar} from "../Navbar/Navbar"

const Header = () =>{

    return(
        <div style={{display:"flex" , width:"100%", height:"20vh", justifyContent:"space-between", alignItems:"center", backgroundColor:"lightblue"}}>
            <h1 style={{color:"violet"}}>GZI Bijoux</h1>
            <Navbar /> 
            <CartWidget />
        </div>
    )
}

export default Header