
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import {createRoot} from "react-dom/client";
import Home from "./views/Home";
import Vegetables from "./views/Vegetables";
import MyCart from "./views/MyCart";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/my-cart" element={<MyCart />} />
    </Routes>
  </BrowserRouter>
);
 