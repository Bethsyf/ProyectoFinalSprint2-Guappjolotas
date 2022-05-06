import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export const StyledBack = styled.div`
display:flex;
width: 24px;
height: 24px;
position:fixed;
left: 24px;
top: 44px;
border-radius:12px;
`

function BtnBack() {
  const navigate = useNavigate()
  return (
    <StyledBack >
      <img src='https://i.imgur.com/glAhAKG.png' alt='back' onClick={() => navigate("/home")}></img>
    </StyledBack>
  );
}

export default BtnBack;