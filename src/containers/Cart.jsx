import React from 'react';
import { BtnComprar } from '../styled/Styled'
import BtnBack from '../components/BtnBack';
import styled from "styled-components"
import CartVacio from '../components/CartVacio';
import ListCart from '../components/ListCart';
import { useNavigate } from 'react-router-dom';

export const StyledH2Carrito = styled.h2`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
position:absolute;
top: 44px;
left: 50%;
`

export const DivBtn = styled.div`
position: fixed;
bottom:10px;
`

export const DivContenedor = styled.div`
display: flex;
flex-direction:column;
position: relative;
align-items: center;
`

export const H2Btn = styled.h2`
background-color:inherit;
`

const Cart = () => {
  const getlocalstorage = JSON.parse(localStorage.getItem('Carrito'))
  const navigate = useNavigate()
  return (
    <DivContenedor>
      <BtnBack />
      <StyledH2Carrito>Carrito</StyledH2Carrito>
      {getlocalstorage
        ? <ListCart />
        : <CartVacio />
      }
      <DivBtn>
        <BtnComprar >
          {getlocalstorage
            ? <H2Btn onClick={() => navigate("/cart")}>Pagar</H2Btn>
            : <H2Btn onClick={() => navigate("/")}>Ir a comprar</H2Btn>
          }
        </BtnComprar>
      </DivBtn>
    </DivContenedor>
  );
}

export default Cart;
