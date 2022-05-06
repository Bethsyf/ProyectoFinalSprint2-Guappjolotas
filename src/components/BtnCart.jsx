import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BtnBack from './BtnBack'

export const StyledCart = styled.div`
display:flex;
width: 34px;
height: 34px;
position:absolute;
right: 24px;
top: 44px;
`

const BtnCart = () => {
  const navigate = useNavigate()
  
  return (
    
    <StyledCart>     
    <img src='https://i.imgur.com/7kmDYGB.png' alt='cart' onClick={() => navigate("/cartvacio")}></img>
    </StyledCart>

  )
}

export default BtnCart