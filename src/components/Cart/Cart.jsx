import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import NoData from "../../assets/images/noData.svg";
import Swal from "sweetalert2";
import "./Cart.css";
import FormCheckOut from "../FormCheckOut/FormCheckOut";
import FinishBuy from "../FinishBuy/FinishBuy";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado con exito!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Carrito NO eliminado", "", "info");
      }
    });
  };

  const deleteCartAlert = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Producto eliminado con exito!", "", "success");
        deleteProductById(id);
      } else if (result.isDenied) {
        Swal.fire("Producto NO eliminado", "", "info");
      }
    });
  };

  const total = getTotalPrice();

  if (orderId) {
    return <FinishBuy orderId={orderId} />;
  }

  return (
    <div>
      {!buy ? (
        <div className="cart-container">
          {cart.length < 1 ? (
            <img src={NoData} alt="" />
          ) : (
            <div className="container-items">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt="" />
                    <div className="cart-item-info">
                      <h2>{item.name}</h2>
                      <h2>${item.price}.-</h2>
                      <h2>Unidades: {item.quantity}</h2>
                    </div>
                    <button
                      variant="contained"
                      onClick={() => deleteCartAlert(item.id)}
                    >
                      Quitar
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="cart-info">
            {/* <h2>Descripcion del carrito:</h2> */}
            <h3>Cantidad de productos: </h3>
            <h3>
              Precio total:
              {total > 0 ? total : "No hay items"}
            </h3>
            <h3>Descuento: </h3>
            <h3>Precio final: </h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <button variant="contained" onClick={() => setBuy(true)}>
                  Ir al checkout
                </button>
                <button onClick={() => clearCartAlert()} variant="contained">
                  Vaciar carrito
                </button>
              </div>
            )}

            <h2>El total a Pagar es ${total}</h2>
          </div>
        </div>
      ) : (
        <FormCheckOut
          cart={cart}
          total={total}
          clearCart={clearCart}
          setOrderId={setOrderId}
        />
      )}
    </div>
  );
};

export default Cart;
