import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const FormularioL = () => {
  const navigate = useNavigate()
  const { signIn, messageError } = useContext(UserContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    setForm({
      ...form,
      [key]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { state } = await signIn(form)

    if (state) {
      navigate('/')
    } else {
      messageError('Usuario o Contraseña, incorrecta', true)
    }
  }

  return (
    <div className='login'>
      <div
        className='card container-fluid bg-white bg-opacity-75 shadow'
        style={{ maxWidth: '50vh', textAlign: 'justify' }}
      >
        <div className='card-body p-4'>
          <div className='titulo text-center'>
            <h1 className='marca'> BUSINESS RAISESS </h1>
          </div>

          <p align='center'>
            <small className='message-error'></small>
          </p>

          {/* <h4 className="card-title p-4 fs-5" align="center">BIENVENIDOS</h4> */}
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
            <div>
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
            <div className='text-center mb-3'>
              <small>
                <Link to='/recover' className='link-primary'>
                  He olvidado mi contraseña
                </Link>
              </small>
              <br />
              <small>
                Recuerda, no debes compartir tu usuario o contraseña, con nadie.
              </small>
            </div>
            <div align='center' className='mt-2'>
              <button type='submit' className='btn btn-dark m-2'>
                Iniciar Sesión
              </button>
              <Link to='/register' className='btn btn-outline-dark m-2'>
                Registrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormularioL
