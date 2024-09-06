import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop.jsx";
import ShopCategory from "./Components/Pages/ShopCategory.jsx";
import Product from "./Components/Pages/Product.jsx";
import LoginSignUp from "./Components/Pages/LoginSignUp.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
