import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  console.log(cart);

  return (
    <div>
      <h1>Carrito de compras</h1>

      {cart.map((item) => {
        return (
          <div key={item.id} style={{ border: "2px solid black" }}>
            <h3>nombre: {item.title}</h3>
            <img
              src={item.img}
              alt=""
              style={{ width: "10%", height: "auto" }}
            />
            <h3>precio: {item.price}</h3>
            <h3>cantidad: {item.quantity}</h3>
            <button onClick={() => deleteProductById(item.id)}>
              Quitar del carrito
            </button>
          </div>
        );
      })}

      <button onClick={clearCart}>Limpiar el carrito</button>

      <h1>El total del carrito es ${getTotalPrice()}</h1>
    </div>
  );
};

export default Cart;
