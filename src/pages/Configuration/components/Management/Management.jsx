import React, { useContext, useState } from 'react'
import UserContext from '../../../../context/UserContext'
import useManagement from '../../../../hooks/useManagement'
const Management = () => {
  const { user } = useContext(UserContext)
  const { handleUpdateUser } = useManagement()

  const [form, setForm] = useState({
    ...user
  })

  const onChange = (event) => {
    const key = event.target.name
    const value = event.target.value

    setForm({
      ...form,
      [key]: value,
    })
  }

  return (
    <>
      <div className='card shadow'>
      <div className='card-body'>
        <p align='center'>
          <small className='message-error'></small>
        </p>
        <h5 className='card-title'>Datos Usuario</h5>
        <div className='row mb-2'>
          <div className='col'>
            <small>
              <label htmlFor='name' className='form-label'>
                Nombre
              </label>
            </small>
            <input
              type='text'
              className='form-control'
              name='name'
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className='col'>
            <small>
              <label htmlFor='surname' className='form-label'>
                Apellido
              </label>
            </small>
            <input
              type='text'
              className='form-control'
              name='surname'
              value={form.surname}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <small>
              <label htmlFor='email' className='form-label'>
                Correo{' '}
              </label>
            </small>
            <input
              type='text'
              className='form-control'
              name='email'
              value={form.email}
              disabled
            />
          </div>
          <div className='col'>
            <small>
              <label htmlFor='department' className='form-label'>
                Departamento{' '}
              </label>
            </small>
            <input
              type='text'
              className='form-control'
              name='department'
              value={form.department}
              onChange={onChange}
            />
          </div>
          <div className='col'>
            <small>
              <label htmlFor='municipality' className='form-label'>
                Municipio
              </label>
            </small>
            <input
              type='text'
              className='form-control'
              name='municipality'
              value={form.municipality}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <small>
              <label htmlFor='occupation' className='form-label'>
                Ocupacion{' '}
              </label>
            </small>
            <input
              type='text'
              className='form-control'
              name='occupation'
              value={form.occupation}
              onChange={onChange}
            />
          </div>
          <div className='col'>
            <small>
              <label htmlFor='telephone' className='form-label'>
                Telefono{' '}
              </label>
            </small>
            <input
              type='tel'
              className='form-control'
              name='telephone'
              value={form.telephone}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <small>
              <label htmlFor='biography' className='form-label'>
                {' '}
                Biografia{' '}
              </label>
            </small>
            <textarea
              className='form-control'
              name='biography'
              value={form.biography}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='row mb-2 text-center'>
          <div className='col'>
            <button
              type='button'
              className='btn btn-primary'
              name='updateUser'
              onClick={ () => handleUpdateUser(form) }
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Management
