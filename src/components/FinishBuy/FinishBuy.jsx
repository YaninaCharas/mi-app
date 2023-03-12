import React from "react";
import { Link } from "react-router-dom";

const FinishBuy = ({ orderId }) => {
  return (
    <div className="container">
      <h2>El id de tu compra es: {orderId} </h2>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
};

export default FinishBuy;
