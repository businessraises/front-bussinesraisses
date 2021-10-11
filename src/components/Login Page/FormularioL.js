import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import draw from '../../static/1_login.svg';

const FormularioL = () => {

  const { user, setUser, autenticar } = useContext(UserContext);

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  }

  return (
    <>
      <div className="titulo">
        <h1 className="marca">BUSINESS RAISESS </h1>
      </div>
      <div class="card container" style={{'max-width' : '80vh', 'text-align' : 'justify'}}>
        <div class="card-body p-4">

          <p align="center" >
            <small className="message-error"></small>
          </p>

          {/* <h4 class="card-title p-4 fs-5" align="center">BIENVENIDOS</h4> */}
          <form onSubmit={(event) => autenticar(event, user, setUser)}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={user.email}
                onChange={onChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
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
