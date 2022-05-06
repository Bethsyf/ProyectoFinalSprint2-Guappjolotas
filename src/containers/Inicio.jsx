import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { keyframes } from 'styled-components'

export const AniLogo = keyframes` 
 0% { height: 400px; width: 400px; opacity: 1 }
 30% { height: 405px; width: 405px; opacity: 0.7; }
 100% { height: 100px; width: 100px; opacity: 0.4; }
`

export const DivInicio = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: inherit;
animation-name: ${AniLogo};
animation-duration: 3s;
`

export const ImgInicio = styled.img`
width: 50%;

`

function Inicio() {
  const navigate = useNavigate()
  const handleLoadAni = () => {
    const leerUsuario = localStorage.getItem('UserApp')
    function IraLogin() {
      if (leerUsuario) { navigate("/home") } else { navigate('/login') }
    }
    setTimeout(IraLogin, 2000)
  }

  handleLoadAni()
  return (
    <DivInicio>
      <ImgInicio src='https://i.imgur.com/55INT93.png' alt='logo-guajolotas' />
    </DivInicio>
  );
}

export default Inicio;