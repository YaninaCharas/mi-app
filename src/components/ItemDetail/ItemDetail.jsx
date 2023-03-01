import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };
    addToCart(obj);

    Swal.fire({
      icon: "success",
      title: "Se agrego su producto al carrito",
    });
  };

  const quantity = getQuantityById(product.id);

  return (
    <div>
      <div className="container">
        <h2>{product.title}</h2>
        <img
          src={product.img}
          alt=""
          style={{ width: "10%", height: "auto" }}
        />
        <h3>${product.price}</h3>
      </div>
      <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
