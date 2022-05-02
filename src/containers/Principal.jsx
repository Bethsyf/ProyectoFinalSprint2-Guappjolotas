import React, { useState, useEffect } from 'react';
import SliderProducto from '../components/SliderProducto';
import BtnVolver from '../components/BtnVolver'
import BtnCarrito from '../components/BtnCarrito';
import SaboresPP from '../components/SaboresPP';
import Combo from '../components/Combo';
import { BtnComprar } from '../styleds/BtnComprar';
import { useParams, useNavigate } from 'react-router-dom';
import { url } from '../helpers/Url';
import axios from 'axios';
import { Flexrow } from '../styleds/Styles';

const Principal = () => {
  const [carrito, setCarrito] = useState([]);  
  const [producto, setProducto] = useState([]);  
  const [guardar, setGuardar] = useState({});
  const [contador, setContador] = useState(1);
  const params = useParams()
  const navigate = useNavigate()
  const { categoria, id } = params

  const getData = async() => {
    axios.get(url + `${categoria}/${id}`)
      .then(res => {
        setProducto(res.data)
        setGuardar([{
          id: res.data.id,
          nombre: res.data.nombre,
          imagen: res.data.imagen,
          precio: res.data.precio,
          cantidad: contador,
          categoria: categoria
        }])
        
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  useEffect(() => {
    getData(url)
  }, []);
  
  let cant = carrito.length + contador

  const agregarLocal = () => {
    guardar[0].cantidad = contador
    let total = [...carrito, ...guardar]

  localStorage.setItem('Carrito', JSON.stringify(total))
  }
  return (<>
    <BtnVolver />
    <Flexrow>
      <BtnCarrito /></Flexrow>
    <SliderProducto producto={producto} numero={contador => setContador(contador)} /><br/>
    <SaboresPP producto={setProducto} categoria={categoria} />
    <Combo categoria={categoria} canasta={carrito} anaCarrito={setCarrito} />
    <BtnComprar type="submit" form="comboscheck" onClick={() => {
      agregarLocal();
      navigate("/carrito")
    }}> Agregar {cant} al carrito ${cant}</BtnComprar>
  </>);
}

export default Principal;