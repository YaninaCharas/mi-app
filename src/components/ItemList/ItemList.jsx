import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <div className="containerItem">
      {items.map((element) => {
        return <Item element={element} key={element.id}/>;
      })}
    </div>
  );
};

export default ItemList;