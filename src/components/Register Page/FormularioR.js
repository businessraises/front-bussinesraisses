import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'

const FormularioR = () => {

    const { user, setUser, registrar } = useContext(UserContext);

    const onChange = ( event ) => {
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
                <div class="card-body">

                <p align="center" >
                    <small className="message-error"></small>
                </p>

                    <Link to="/" className="btn btn-outline-dark btn-sm mb-2"> <i class="bi bi-arrow-left"></i> Volver </Link>
                    <form onSubmit={ (event) => registrar(event, user) }>
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
                                value = { user.email }
                                onChange = { onChange }
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                class="form-control mb-3"
                                id="password"
                                name="password"
                                placeholder="***********"
                                value = { user.password }
                                onChange = { onChange }
                            />
                            <label for="exampleInputPassword1" class="form-label">
                                Repetir contraseña
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="passwordTemp"
                                name="passwordTemp"
                                placeholder="***********"
                            />
                        </div>
                        <div align="center">
                            <button type="submit" class="btn btn-primary w-100">
                                Crear cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormularioR;
