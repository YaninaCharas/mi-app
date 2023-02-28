// import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { productos } from "../../productosMock";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };
    addToCart(obj);
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
