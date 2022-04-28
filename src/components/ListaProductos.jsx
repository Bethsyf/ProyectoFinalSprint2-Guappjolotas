import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../helpers/Url';
import { Flexrow } from '../styleds/Styles';
import { useNavigate } from 'react-router-dom';

export const Guajolotas = () => {
    const navigate = useNavigate()
    const [guajolota, setGuajolota] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await axios.get(url + "guajolota")
            .then(res => {
                setGuajolota(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='ListaProductos'>
            {
                guajolota.map(ele => (
                    <Flexrow className='itemListado' key={ele.id} onClick={() => navigate(`/principal/guajolota/${ele.id}`)}>
                        <div className='contenedorImagen'>
                            <img src={ele.imagen} alt={ele.nombre} />
                        </div>
                        <div className='descProducto'>
                            <p className='descProducto'>
                                {ele.nombre}
                            </p>
                            <p className='descProducto precio'>
                                {"$ " + ele.precio + " MXN"}
                            </p>
                        </div>
                    </Flexrow >
                ))
            }
        </div>
    )
}

export const Bebidas = () => {
    const navigate = useNavigate()
    const [bebida, setBebida] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url + "bebidas")
            .then(res => {
                setBebida(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='ListaProductos'>
            {
                bebida.map(ele => (
                    <Flexrow className='itemListado' key={ele.id} onClick={() => navigate(`/principal/bebidas/${ele.id}`)}>
                        <div className='contenedorImagen'>
                            <img src={ele.imagen} alt={ele.nombre} />
                        </div>
                        <div className='descProducto bebida'>
                            <p className='descProducto nombre'>
                                {ele.nombre}
                            </p>
                            <p className='descProducto precio'>
                                {"$ " + ele.precio + " MXN"}
                            </p>
                        </div>
                    </Flexrow >
                ))
            }
        </div>
    )
}
export const Tamales = () => {
    const navigate = useNavigate()
    const [tamal, setTamal] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url + "tamales")
            .then(res => {
                setTamal(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='ListaProductos'>
            {
                tamal.map(ele => (
                    <Flexrow className='itemListado' key={ele.id} onClick={() => navigate(`/principal/tamales/${ele.id}`)}>
                        <div className='contenedorImagen'>
                            <img src={ele.imagen} alt={ele.nombre} />
                        </div>
                        <div className='descProducto bebida'>
                            <p className='descProducto nombre'>
                                {ele.nombre}
                            </p>
                            <p className='descProducto precio'>
                                {"$ " + ele.precio + " MXN"}
                            </p>
                        </div>
                    </Flexrow >
                ))
            }
        </div>
    )
}