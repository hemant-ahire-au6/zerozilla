import "./App.css";
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import MyProfile from "./Component/MyProfile/MyProfile";
import ProductDetails from "./Component/Product/ProductDetails";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product-details/:id" element={<ProductDetails />} />
        <Route path="/My-Profile" element={<MyProfile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
