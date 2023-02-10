import {Link} from "react-router-dom"
import { BsFillCartCheckFill } from 'react-icons/bs';
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="Container-Cart">
        <BsFillCartCheckFill
          style={{
          fontSize: "2rem",
          color: "#7F669D",
        }}/> 
        <div className="bubble-counter">
          <span>12</span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget