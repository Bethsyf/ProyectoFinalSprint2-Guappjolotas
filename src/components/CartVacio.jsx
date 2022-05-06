import React from 'react';
import styled from 'styled-components'
import BtnBack from './BtnBack';

export const StyledImgCart = styled.img`
display: flex;
justify-content: center;
align-items: center;
width:150px;
height:150px;
margin: 0 auto;
`

export const StyledH2 = styled.h2`
margin: 0 auto;
display:flex;
justify-content: center;
`

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
top: 30vh; 
left: 40px;
margin: 0 auto;
`

function CartVacio() {
  return (
    <>
    <BtnBack />
    <StyledDiv>
      <StyledImgCart src='https://i.imgur.com/7kmDYGB.png' alt='cart'></StyledImgCart>
      <StyledH2>No hay productos</StyledH2>
    </StyledDiv>
    </>
  );
}

export default CartVacio;