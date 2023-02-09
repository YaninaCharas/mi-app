import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <div className="containerItem">
      {items.map((element) => {
        return <ProductCard element={element} />;
      })}
    </div>
  );
};

export default ItemList;