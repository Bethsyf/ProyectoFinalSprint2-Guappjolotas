import React from 'react';
import styled from 'styled-components';

export const DivSabores = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 160px;
    padding: 0 24px;
    margin: 24px 0;
`

export const ImgSabor = styled.img`
    width:64px;
    height:69px;
    opacity: 0.5;
    &:hover {
    opacity: 1;
  }
`

const Sabores = () => {
    
  return (
    <div>
      <h2>Sabor</h2>
      <DivSabores>
        <ImgSabor name="verde" src='https://i.imgur.com/4JvggCN.png'></ImgSabor>
        <ImgSabor name="mole" src='https://i.imgur.com/j3G7JKX.png'></ImgSabor>
        <ImgSabor name="rajas" src='https://i.imgur.com/4dXDMqw.png'></ImgSabor>
        <ImgSabor name="pina" src='https://i.imgur.com/pVDtedv.png'></ImgSabor>
        <ImgSabor name="pasas" src='https://i.imgur.com/BEfy9Cx.png'></ImgSabor>
        <ImgSabor name="guayaba" src='https://i.imgur.com/BXMTB0d.png'></ImgSabor>
      </DivSabores>
    </div>
  );
}

export default Sabores