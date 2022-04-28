import React, { Component } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Principal from '../containers/Principal'
import Inicio from '../containers/Inicio'
import Login from '../containers/Login'
import ModalCarrito from '../containers/Modal'
import Header from '../containers/Header'
import Cart from '../containers/Cart'

export default class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Inicio />} />
                    <Route exact path="/menu" element={<Header />} />
                    <Route exact path="/principal/:categoria/:id" element={<Principal />} />                    
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/carrito" element={<Cart />} />
                    <Route exact path="/modal/:categoria/:id" element={<ModalCarrito />} />                    
                    {/* <Route exact path='/pagos' element={<Pagos/>} /> */}
                </Routes>
            </HashRouter>
        )
    }
}