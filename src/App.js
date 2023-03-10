import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categid" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h4>Error 404 Not Fuond </h4>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
