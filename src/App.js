import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categid" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h4>Error 404 Not Fuond </h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
