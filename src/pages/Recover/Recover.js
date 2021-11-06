import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Recover = () => {
  const [email, setEmail] = useState(null)

  const handleSubmit = () => {
    /* Implementar recordar contraseña */
    return null
  }

  const onChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <>
      <div className='login'>
        <div
          className='card container-fluid bg-white bg-opacity-75 shadow'
          style={{ maxWidth: '50vh', textAlign: 'justify' }}
        >
          <div className='card-body p-4'>
            <Link to='/' className='btn btn-outline-dark btn-sm mb-2'>
              <i className='bi bi-arrow-left'></i> Volver
            </Link>

            <p align='center'>
              <small className='message-error'></small>
            </p>

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
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>

              <div align='center' className='mt-2'>
                <button type='submit' className='btn btn-dark m-2'>
                  Recuper contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recover
