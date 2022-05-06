import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../helpers/url';

const Guajolotas = () => {
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
                    <div className='itemListado' key={ele.id} onClick={() => navigate(`/main/guajolota/${ele.id}`)}>
                        <div className='contenedorImagen'>
                            <img className='imgprod'src={ele.imagen} alt={ele.nombre} />
                        </div>
                        <div className='descProducto'>
                            <p className='descProducto'>
                                {ele.nombre}
                            </p>
                            <p className='descProducto precio'>
                                {"$ " + ele.precio + " MXN"}
                            </p>
                        </div>
                    </div >
                ))
            }
        </div>
    )
}

export default Guajolotas;