import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./Contador";
import styled from "styled-components";

export const DivCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
top: 0px;
`

export const ImgModal = styled.img`
width: 100px;
height: 100px;
`

export const H3Modal = styled.h3`
   color:#FA4A0C;
   text-align:center;
   margin: 10px;
`

const Productos = (props) => {
    let producto = props.producto
    let num = props.numero
    const { imagen, nombre, precio } = producto

    return (
        <>
            <DivCol>
                <ImgModal src={imagen}></ImgModal>
                <h3>{nombre}</h3>
                <H3Modal>${precio} MXN</H3Modal>
                <Contador conteo={contador => num(contador)} />
            </DivCol>
        </>
    )
}

export default Productos