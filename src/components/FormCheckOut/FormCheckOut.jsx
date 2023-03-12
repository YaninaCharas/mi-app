import { useState } from "react";

import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckOut = ({ cart, total, clearCart, setOrderId }) => {
  const [userInfo, setUserInfo] = useState({
    family: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    // Insertar la order de compra
    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    // Descontar el Stock de productos

    cart.map((product) =>
      updateDoc(doc(db, "productos", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="family"
          onChange={(e) => setUserInfo({ ...userInfo, family: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <button>Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckOut;
