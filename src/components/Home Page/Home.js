import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Redirect } from 'react-router';

import axios from 'axios';

const Home = ( props ) => {
    const { user, setUser, salir, messageError } = useContext(UserContext);

    const [ form, setForm ] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        department: '',
        municipality: '',
        occupation: '',
        telephone: '',
        biography: '',
        latitude: null,
        longitude: null,
    })

    useEffect( async () => {
        if( !user.sesion ) return;

        const { uid, accessToken } = user.sesion;

        await axios.get( `/user/uid/${uid}`, { 
            baseURL: 'https://spring-business-raises.herokuapp.com',
            method: 'GET', 
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json' 
            },
            withCredentials: true
        }).then( async (response) => {
            const { data } = response;

            console.log( data );
            setForm({
                ...form,
                id: data.id ? data.id : '',
                name: data.name ? data.name : '',
                surname: data.surname ? data.surname : '',
                email: data.email ? data.email : '',
                department: data.department ? data.department : '',
                municipality: data.municipality ? data.municipality : '',
                occupation: data.occupation ? data.occupation : '',
                telephone: data.telephone ? data.telephone : '',
                biography: data.biography ? data.biography : '',
            })
        })

    }, [])

    const onChange = ( event ) => {
        const key = event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [key]: value
        })
    }

    const handleUpdate = async () => {
        const { accessToken } = user.sesion;

        await axios.put( '/user', form, { 
            baseURL: 'https://spring-business-raises.herokuapp.com',
            method: 'GET', 
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json' 
            },
            withCredentials: true
        }).then( (response) => {
            messageError('Se han actualizado los datos correctamente.')
        }).catch( error => {
            messageError('Error, por favor, intentelo más tarde.')
        })

    }

    const handleLogout = () => {
        salir( setUser );
        props.history.push('/');
    }

    if( !user.sesion ) return <Redirect to='/' />

    return (
        <div className='card'>
            <div className='card-body'>
                <p align="center" >
                    <small className="message-error"></small>
                </p>
                <h5 className='card-title'>Datos Usuario</h5>
                <div className='row mb-2'>
                    <div className='col'>
                        <small><label htmlFor='name' className='form-label'>Nombre</label></small>
                        <input type='text' className='form-control' name='name' value={form.name} onChange={onChange} />
                    </div>
                    <div className='col'>
                        <small><label htmlFor='surname' className='form-label'>Apellido</label></small>
                        <input type='text' className='form-control' name='surname' value={form.surname} onChange={onChange} />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col'>
                        <small><label htmlFor='email' className='form-label'>Correo </label></small>
                        <input type='text' className='form-control' name='email' value={form.email} disabled/>
                    </div>
                    <div className='col'>
                        <small><label htmlFor='department' className='form-label'>Departamento </label></small>
                        <input type='text' className='form-control' name='department' value={form.department} onChange={onChange} />
                    </div>
                    <div className='col'>
                        <small><label htmlFor='municipality' className='form-label'>Municipio</label></small>
                        <input type='text' className='form-control' name='municipality' value={form.municipality} onChange={onChange} />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col'>
                        <small><label htmlFor='occupation' className='form-label'>Ocupacion </label></small>
                        <input type='text' className='form-control' name='occupation' value={form.occupation} onChange={onChange} />
                    </div>
                    <div className='col'>
                        <small><label htmlFor='telephone' className='form-label'>Telefono </label></small>
                        <input type='tel' className='form-control' name='telephone' value={form.telephone} onChange={onChange} />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col'>
                        <small><label htmlFor='biography' className='form-label'> Biografia </label></small>
                        <textarea className='form-control' name='biography' value={form.biography}  onChange={onChange} />
                    </div>
                </div>
                <div className='row mb-2 text-center'>
                    <div className='col'>
                        <button type='button' className='btn btn-primary' name='updateUser' onClick={ handleUpdate } >Guardar</button>
                    </div>
                    <div className='col'>
                        <button type='button' className='btn btn-outline-danger' name='logout' onClick={ handleLogout } >Cerrar sesion</button>
                    </div>
                </div>
            </div>
        </div>
    )
 

}

export default Home
