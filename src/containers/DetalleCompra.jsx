import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from '../components/Contador.jsx'
import { BtnComprar } from "../styled/Styled.js";
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router-dom';

export const DivCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:10vh;
`

export const ImgModal = styled.img`
width: 80px;
height: 80px;
margin: 16px;
`

export const H3Modal = styled.h3`
color:#FA4A0C;
text-align:center;
margin: 10px;
`

const DetalleCompra = () => {
   const navigate = useNavigate()
   let getlocalstorage = JSON.parse(localStorage.getItem('Carrito'))
   const params = useParams()
   const {  id } = params
   let itemSelect = getlocalstorage.find(ele => ele.id == id)
   const [counter, conteo] = useState(itemSelect.cantidad);
   const findInd = getlocalstorage.findIndex(ele => ele.id == id)
   const handleActualize = () => {
      getlocalstorage[findInd].cantidad = counter
      localStorage.setItem('Carrito', JSON.stringify(getlocalstorage))
   }
   return (
      <>
         <DivCol>
            <ImgModal src={itemSelect.imagen}></ImgModal>
            <h3>{itemSelect.nombre}</h3>
            <H3Modal>${itemSelect.precio * counter} MXN</H3Modal>
            <Contador conteo={conteo} />
            <h3><BtnComprar onClick={() => { handleActualize(); navigate("/cart") }}>Actualizar</BtnComprar></h3>
            <H3Modal onClick={() => navigate("/cart")}>Cerrar</H3Modal>
         </DivCol>
      </>
   )
}
export default DetalleCompra;