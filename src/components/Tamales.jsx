import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../helpers/url';

const Tamales = () => {
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
                    <div className='itemListado' key={ele.id} onClick={() => navigate(`/main/tamales/${ele.id}`)}>
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
                    </div >
                ))
            }
        </div>
    )
}

export default Tamales;