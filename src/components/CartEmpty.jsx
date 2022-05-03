import React from 'react';
import styled from 'styled-components'
import { StyledDivCenter } from '../styleds/StyledDivCenter'

export const StyledImgCartEmpty = styled.img`
display: flex;
justify-content: center;
align-items: center;
width:150px;
height:150px;
margin: 0 auto;
`

export const StyledH2CarEmp = styled.h2`
margin: 0 auto;
display:flex;
justify-content: center;
`

function CartEmpty() {
  return (
    <StyledDivCenter>
      <StyledImgCartEmpty src='https://i.imgur.com/7kmDYGB.png'></StyledImgCartEmpty>
      <StyledH2CarEmp>No hay productos</StyledH2CarEmp>
    </StyledDivCenter>
  );
}

export default CartEmpty;