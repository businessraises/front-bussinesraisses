import React, { useState } from 'react'

const FormPost = () => {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <>
      <form id='formPost'>
        <div className='row'>
          <div className='col-7 mb-3 '>
            <label htmlFor='InputTitle' className='form-label'>
              Titulo
            </label>
            <input
              type='text'
              className='form-control'
              id='InputTitle'
              name='title'
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-5 mb-3 '>
            <label htmlFor='SelectType' className='form-label'>
              Tipo
            </label>
            <select
              className='form-select'
              id='SelectType'
              name='type'
              onChange={handleChange}
              required
            >
              <option defaultValue hidden>
                Tienda de
              </option>
              <option value='Moda'>Moda</option>
              <option value='Tecnologia'>Tecnologia</option>
              <option value='Comida'>Comida</option>
              <option value='Varios'>Varios</option>
            </select>
          </div>
          <div className='col-6 mb-3 '>
            <label htmlFor='InputTelephone1' className='form-label'>
              Telefono #1
            </label>
            <input
              type='number'
              className='form-control'
              id='InputTelephone1'
              name='primaryTelephone'
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-6 mb-3 '>
            <label htmlFor='InputTelephone2' className='form-label'>
              Telefono #2
            </label>
            <input
              type='number'
              className='form-control'
              id='InputTelephone2'
              name='secondaryTelephone'
              onChange={handleChange}
            />
          </div>

          <div className='col-7 mb-3 '>
            <label htmlFor='InputEmail1' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='InputEmail1'
              name='secondaryEmail'
              onChange={handleChange}
            />
          </div>
          <div className='col-5 mb-3 '>
            <label htmlFor='InputAddress' className='form-label'>
              Direccion
            </label>
            <input
              type='text'
              className='form-control'
              id='InputAddress'
              name='direction'
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-6 mb-3'>
            <div className='row'>
              <label htmlFor='InputHourA' className='form-label'>
                Hora de apertura
              </label>
              <div className='col'>
                <input
                  type='number'
                  className='form-control'
                  id='InputHourA'
                />
              </div>
              <div className='col'>
                <select className='form-select'>
                  <option value='AM'>AM</option>
                  <option value='PM'>PM</option>
                </select>
              </div>
            </div>
          </div>
          <div className='col-6 mb-3'>
            <div className='row'>
              <label htmlFor='InputHourC' className='form-label'>
                Hora de cierre
              </label>
              <div className='col'>
                <input
                  type='number'
                  className='form-control'
                  id='InputHourC'
                />
              </div>
              <div className='col'>
                <select className='form-select'>
                  <option value='AM'>AM</option>
                  <option value='PM'>PM</option>
                </select>
              </div>
            </div>
          </div>
          <div className='col-12 mb-3 '>
            <label htmlFor='InputDrescription' className='form-label'>
              Descripción
            </label>
            <textarea
              type='Text'
              className='form-control'
              id='InputDrescription'
              name='description'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type='submit' className='btn btn-outline-dark w-100'>
          Guardar Cambios
        </button>
      </form>
    </>
  )
}

export default FormPost
