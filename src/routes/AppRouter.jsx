import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartVacio from "../components/CartVacio";
import Cart from "../containers/Cart";
import DetalleCompra from "../containers/DetalleCompra";
import Home from "../containers/Home";
import Inicio from "../containers/Inicio";
import Login from "../containers/Login";
import Main from "../containers/Main";

const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main/:categoria/:id" element={<Main />} />
          <Route path="/compra/:categoria/:id" element={<DetalleCompra />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartvacio" element={<CartVacio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;