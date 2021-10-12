import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import draw from '../../static/1_login.svg';

const FormularioL = ( props ) => {

  const { user, setUser, autenticar, messageError } = useContext(UserContext);

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  }

  const handleSubmit = async ( event ) => {
    event.preventDefault();

    const sesion = await autenticar(  user, setUser );
    
    if( sesion.state ) {
      props.history.push('/home')
    }
    else {
      messageError('Usuario o Contraseña, incorrecta');
    }
  }

  return (
    <>
      <div className="titulo">
        <h1 className="marca">BUSINESS RAISESS </h1>
      </div>
      <div className="card container" style={{maxWidth : '80vh', textAlign : 'justify'}}>
        <div className="card-body p-4">

          <p align="center" >
            <small className="message-error"></small>
          </p>

          {/* <h4 className="card-title p-4 fs-5" align="center">BIENVENIDOS</h4> */}
          <form onSubmit={ handleSubmit }>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={user.email}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="***********"
                value={user.password}
                onChange={onChange}
              />
            </div>
            <p><small> Recuerda, no debes compartir tu usuario o contraseña, con nadie. </small></p>
            
            <div align="center" className="mt-2">
              <button type="submit" className="btn btn-primary m-2">
                Iniciar Sesión
              </button>
              <Link to="/register" className="btn btn-outline-primary m-2">Registrar</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioL;
