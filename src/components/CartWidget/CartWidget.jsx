import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="Container-Cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#7F669D",
          }}
        />
        {getTotalItems() > 0 && (
          <div className="bubble-counter">
            <span>{getTotalItems() > 0 && getTotalItems()}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
