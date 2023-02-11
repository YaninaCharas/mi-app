import React from "react";
import { Link } from "react-router-dom";

import "./Item.css"

const Item = ({ element }) => {
  return (
    <div className="containerItems">
      <h2>{element.title}</h2>
      <img
        src={element.img}
        alt=""
        style={{ width: "100%", height: "200px"}}
      />
      <h3>${element.price}</h3>
      <Link to={`/item/${element.id}`}>
        <button className="buttonItem">Ver Mas</button>
     </Link>
    </div>
  );
};

export default Item;