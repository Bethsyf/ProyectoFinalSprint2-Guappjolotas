import React, { useState } from 'react'
import styled from 'styled-components'

export const DivBtns = styled.div`
display:flex;
flex-direction: row;
background-color: white;
justify-content: space-between;
align-items: center;
width: 190px;
height: 72px;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 16px;
`

export const BtnContAdd = styled.button`
  background-image:url('https://i.imgur.com/hLnizoL.png');
  border-style: none;
  height:40px;
  width:40px;
  background-color: white;
  background-position:center;
  background-size: cover;
`

export const BtnContSub = styled.button`
  background-image:url('https://i.imgur.com/NnlSw7i.png');
  border-style: none;
  height:40px;
  width:40px;
  background-color: white;
  background-position:center;
  background-size: cover;
`

export const H2Count = styled.h2`
background-color: white;
`

const Contador = (props) => {
  let conteo = props.conteo
  const [counter, setCounter] = useState(1);

  const handledSubstract = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
    conteo(counter)
  }

  const handledAdd = () => {
    setCounter(counter + 1)
    conteo(counter)
  }
  
  return (
    <>
      <DivBtns >
        <BtnContSub variant="light" onClick={handledSubstract}>.</BtnContSub>
        <H2Count>{counter}</H2Count>
        <BtnContAdd variant="light" onClick={handledAdd}>.</BtnContAdd>
      </DivBtns>
    </>
  )
}

export default Contador;