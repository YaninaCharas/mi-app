import { useEffect, useState } from "react";

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
        <button variant="outlined" onClick={sumar}>
          +
        </button>
        <button variant="contained" onClick={() => onAdd(contador)}>
          agregar al carrito
        </button>
        <button variant="outlined" onClick={restar}>
          -
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
