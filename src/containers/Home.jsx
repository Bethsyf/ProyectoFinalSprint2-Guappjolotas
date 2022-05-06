import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import Bebidas from '../components/Bebidas';
import BtnCart from '../components/BtnCart';
import Guajolotas from '../components/Guajolota';
import Shearch from '../components/Shearch';
import Tamales from '../components/Tamales';
import { url } from '../helpers/url';
import { Flexrow, Product } from '../styled/Styled';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      showGuajolota: true,
      showBebidas: false,
      showTamal: false,
      change: false,
      producto: '',
      productos: []
    };
  }

  async componentDidMount() {
    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.map((el) => {
          let todosproductos = {
            id: el.id,
            nombre: el.nombre,
            precio: el.precio,
            imagen: el.imagen,
            categoria: el.categoria
          }
          let productos = [...this.state.productos, todosproductos];
          this.setState({ productos })
        })
      })
  }

  guajolotas = () => {
    this.setState({
      showGuajolota: true,
      showBebidas: false,
      change: false,
      showTamal: false
    })
  }
  bebidas = () => {
    this.setState({
      showGuajolota: false,
      showBebidas: true,
      change: false,
      showTamal: false
    })
  }
  tamales = () => {
    this.setState({
      showGuajolota: false,
      showBebidas: false,
      change: false,
      showTamal: true
    })
  }
  changed = () => {
    this.setState({
      showGuajolota: false,
      showBebidas: false,
      showTamal: false,
      change: true
    })
  }

  render() {

    const productosearch = this.state.producto
    const porductoUnidad = this.state.productos
    function filterItems(query) {
      return porductoUnidad.filter(function (el) {
        return el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
      })
    }

    const filtrado = filterItems(productosearch)
    return (<div className='cabecera'>
      <Flexrow className='iconosCabecera'>

        <div className='cont-image'>
          <img className='image'
            src='https://i.imgur.com/55INT93.png' alt="Logo" />
        </div>
        <BtnCart />
      </Flexrow>
      <h1>Nada como una guajolotas para empezar el día</h1>
      <Shearch />
      <Flexrow className='iconosCabecera'>
        <Product className={'Product'} onClick={this.guajolotas}>Guajolotas</Product>
        <Product className={'Product'} onClick={this.bebidas}>Bebidas</Product>
        <Product className={'Product'} onClick={this.tamales} >Tamales</Product>
      </Flexrow>
      {this.state.showGuajolota && <Guajolotas />}
      {this.state.showBebidas && <Bebidas />}
      {this.state.showTamal && <Tamales />}
      {this.state.change && <div>
        {filtrado.map(ele => (
          <div key={ele.id} className='ListaProductos '>
            <Flexrow className='itemListado ' key={ele.id} onClick={() => useNavigate(`/main/${ele.categoria}/${ele.id}`)} >
              <div className='contenedorImagen'>
                <img className='imgprod' src={ele.imagen} alt={ele.nombre} />
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
          </div>
        ))}
      </div>}
    </div>);
  }
}