import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { urluser } from '../helpers/url';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Conta = styled.div`
flex-direction: column;
margin-top: 30px;
padding: 25px;
`

export const Logo = styled.img`
width: 80px;
height: 80px;
min-width: 80px;
`

export const Input1 = styled.input`
background-color: white;
height: 30px;
width: 100%;
border-style: none;
color: black;
`

export const Label = styled.label`
float: left;
margin: 5px auto;
`

export const Button = styled.button`
background-color: #FA4A0C;
border-style: none;
width: 100px;
height: 30px;
float: right;
color: white;
`

export const Crear = styled.button`
color: #FA4A0C;
background-color: white;
border-style: none;
`

export const Alerta = styled.p`
color: #FA4A0C;
`

export const ContBtn = styled.div`
width: 50%;
`

const Login = () => {
  const navigate = useNavigate()
  const [loginOn, setLoginOn] = useState(true)
  const [alert, setAlert] = useState()
  const [usuario, setUsuario] = useState({
    name: '',
    email: '',
    password: '',
    imagen: '',
  });

  const [ingreso, setIngreso] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
  }, [loginOn]);

  const handleInputChange = ({ target }) => {
    if (loginOn) {
      setIngreso({
        ...ingreso,
        [target.name]: target.value
      })
    }
    else {
      setUsuario({
        ...usuario,
        [target.name]: target.value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginOn) {
      setAlert('verificando...')
      leerUsuario(ingreso)
      console.log('leyendo usuario')
    } else {
      console.log('creando usuario')
      crearUsuario(usuario)
    }
  }

  const crearUsuario = (usuarios) => {
    axios.post(urluser, usuarios)
      .then(response => {
        console.log('Usuario creado')
        navigate('/login')
        console.log('No pasa de aqui?')

      })
      .catch(error => {
        console.log(error);
      })
  }

  const leerUsuario = async (ingreso) => {
    axios.get(urluser)
      .then(response => {
        const existeRegistro = response.data.some(ele => (ele.email === ingreso.email) && (ele.password === ingreso.password))
        if (existeRegistro) {
          localStorage.setItem('UserApp', JSON.stringify(ingreso.email))
          navigate('/home')
        } else { setAlert('email o contraseña invalidos') }
      })
      .catch(error => {
        console.log(error);
      })
  }
  if (loginOn) {
    return (
      <div>
        <Conta>
          <Link to={"/"}><Logo src='https://i.imgur.com/55INT93.png'></Logo></Link>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Label>Correo electrónico</Label>
            <Input1
              type="text"
              className="form-control mt-2"
              name="email"
              autoComplete="off"
              placeholder="Correo electronico"
              required
              onChange={handleInputChange}
            />
            <Label>Contraseña</Label>
            <Input1
              className="form-control mt-2"
              autoComplete="off"
              name="password"
              placeholder="Constraseña"
              type="password"
              required
              onChange={handleInputChange}
            />
            <Alerta>{alert}</Alerta>
            <br></br>
            <ContBtn >
              <Button
                value="Save"
                type="submit"
              > Iniciar</Button>
              <Crear onClick={() => setLoginOn(false)}>Crear Usuario</Crear>
            </ContBtn>
          </form>
        </Conta>
      </div>
    )
  } else {
    return (
      <div>
        <Conta>
          <Link to={"/"}><Logo src='https://i.imgur.com/55INT93.png'></Logo></Link>
          <h1>Crear Usuario</h1>
          <form onSubmit={handleSubmit}>
            <Label>Nombre</Label>
            <Input1
              id="fileSelector"
              type="text"
              className="form-control "
              placeholder="Nombre"
              name="name"
              required
              onChange={handleInputChange}
            />
            <Label>Correo electrónico</Label>
            <Input1
              type="text"
              className="form-control mt-2"
              name="email"
              autoComplete="off"
              placeholder="Correo electronico"
              required
              onChange={handleInputChange}
            />
            <Label>Contraseña</Label>
            <Input1
              className="form-control mt-2"
              autoComplete="off"
              name="password"
              placeholder="Constraseña"
              type="password"
              required
              onChange={handleInputChange}
            />

            <br></br>
            <div >
              <Button
                value="Save"
                type="submit"
              > Guardar</Button>
            </div>
          </form>
        </Conta>
      </div>
    )
  }
}


export default Login;   