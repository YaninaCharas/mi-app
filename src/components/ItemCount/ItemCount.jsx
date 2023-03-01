import { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
      <h2>Cantidad: {contador}</h2>
      <div className="btns">
        <button onClick={sumar}>+</button>
        <button onClick={() => onAdd(contador)}>Agregar Al carrito</button>
        <button onClick={restar}>-</button>
      </div>
    </div>
  );
};

export default ItemCount;
