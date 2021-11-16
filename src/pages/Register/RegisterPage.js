import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const FormularioR = () => {
  const { form, onChange, handleSubmitRegister: handleSubmit } = useLogin()

  return (
    <div className='login'>
      <div
        className='card container-fluid bg-white bg-opacity-75 shadow'
        style={{ maxWidth: '50vh', textAlign: 'justify' }}
      >
        <div className='card-body'>
          <div className='titulo text-center'>
            <h1 className='marca'>BUSINESS RAISESS </h1>
          </div>

          <p align='center'>
            <small className='message-error'></small>
          </p>

          <Link to='/' className='btn btn-outline-dark btn-sm mb-2'>
            <i className='bi bi-arrow-left'></i> Volver
          </Link>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label fw-lighter'>
                Correo electronico
              </label>
              <input
                type='email'
                className='form-control bg-light bg-opacity-50'
                id='email'
                name='email'
                placeholder='example@example.com'
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label fw-lighter'>
                Contraseña
              </label>
              <input
                type='password'
                className='form-control bg-light bg-opacity-50'
                id='password'
                name='password'
                placeholder='***********'
                value={form.password}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='passwordTemp' className='form-label fw-lighter'>
                Repetir contraseña
              </label>
              <input
                type='password'
                className='form-control bg-light bg-opacity-50'
                id='passwordTemp'
                name='passwordTemp'
                placeholder='***********'
                required
              />
            </div>
            <div align='center'>
              <button type='submit' className='btn btn-dark w-100'>
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioR
