
import "./Navbar.css"

const Navbar = (props) =>{
    return (
        <div className="container-Navbar">
            <a style={{color:"blue"}}>{props.title}</a>
        </div>
    )
}

export default Navbar