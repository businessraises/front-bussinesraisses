import React, { useState, useContext } from "react";
import { UserContext } from '../../context/UserContext'


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
      <div class="card container">
        <div class="card-body">
          <h4 class="card-title">BUSINESS RAISES</h4>
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
            <button type="submit" class="btn btn-primary">
              Iniciar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioL;
