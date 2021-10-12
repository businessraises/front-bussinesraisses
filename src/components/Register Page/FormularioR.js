import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { Redirect } from "react-router-dom";

const FormularioR = ( props ) => {

    const { user, setUser, registrar, messageError } = useContext(UserContext);

    const onChange = ( event ) => {
        const key = event.target.name;
        const value = event.target.value;
        setUser({
            ...user,
            [key]: value,
        });
    }

    const handleSubmit = async ( event ) => {
        event.preventDefault()
        const psw = document.getElementsByName('passwordTemp')[0].value;
        
        if( psw === user.password ) {
            const sesion = await registrar( user, setUser );

            if( sesion.state ) {
                /* Redirect  */
                props.history.push('/home')
            }
            else {
                // messageError(sesion.data.message.split(': ')[1])
                messageError('Ha ocurrido un error, vuelva a intentar.')
            }
        }
        else {
            messageError('Verificar contraseña, deben ser iguales');
        }
    }

    return (
        <Grid container>
            <div className="titulo">
                <h1 className="marca">BUSINESS RAISESS </h1>
            </div>
            <div className="card container" style={{maxWidth : '80vh', textAlign : 'justify'}}>
                <div className="card-body">

                <p align="center" >
                    <small className="message-error"></small>
                </p>

                    <Link to="/" className="btn btn-outline-dark btn-sm mb-2"> <i className="bi bi-arrow-left"></i> Volver </Link>
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
                                value = { user.email }
                                onChange = { onChange }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control mb-3"
                                id="password"
                                name="password"
                                placeholder="***********"
                                value = { user.password }
                                onChange = { onChange }
                            />
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Repetir contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordTemp"
                                name="passwordTemp"
                                placeholder="***********"
                            />
                        </div>
                        <div align="center">
                            <button type="submit" className="btn btn-primary w-100">
                                Crear cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Grid>
    );
};

export default FormularioR;
