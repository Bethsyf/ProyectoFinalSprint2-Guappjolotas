import React, { useState, useEffect } from 'react';
import Producto from '../components/Productos';
import BtnBack from '../components/BtnBack'
import BtnCart from '../components/BtnCart';
import Sabores from '../components/Sabores';
import Combo from '../components/Combo';
import { BtnComprar } from '../styled/Styled';
import { useParams, useNavigate } from 'react-router-dom';
import { url } from '../helpers/url';
import axios from 'axios';
import { Flexrow } from '../styled/Styled';

const Main = () => {
  const [carrito, setCarrito] = useState([]);
  const [producto, setProducto] = useState([]);
  const [guardar, setGuardar] = useState({});
  const [contador, setContador] = useState(1);
  const params = useParams()
  const navigate = useNavigate()
  const { categoria, id } = params

  const getData = async () => {
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
    <BtnBack />
    <Flexrow>
      <BtnCart /></Flexrow>
    <Producto producto={producto} numero={contador => setContador(contador)} /><br />
    <Sabores producto={setProducto} categoria={categoria} />
    <Combo categoria={categoria} canasta={carrito} carritoT={setCarrito} />
    <BtnComprar type="submit" form="comboscheck" onClick={() => {
      agregarLocal();
      navigate("/cart")
    }}> Agregar {cant} al carrito ${cant}</BtnComprar>
  </>);
}

export default Main;