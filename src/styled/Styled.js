import styled from "styled-components";

export const Flexrow = styled.div`
    display: flex;
    padding: 3% 5% 2% 0;
    position:relative; 
`

export const Search = styled.div`
    border-radius: 50px;
    background-color: #e7e7e7;
    padding: 5%;
    width: 80%;
    height: 10%;
    margin:auto;
    display:flex;    
`

export const SearchInput = styled.input`
    width:100%;
    border:none;
    background-color: #e7e7e7;
    &:focus {
        border-style:none none solid none;
        border-color: #F7D58D;        
    }
`

export const Product = styled.p`
    font-size: 1rem;
`

export const BtnComprar = styled.button`
    display:flex;
    flex-direction:row;
    align-items: center;
    width: 312px;
    height: 50px;
    padding: 24px;
    background-color:#FA4A0C;
    border-radius: 40px;
    border-style:none;
    color: white;
    text-align:center;
    justify-content: center;
    margin: 10px;
    &:hover {
        opacity: 0.5;
  }
`