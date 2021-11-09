import React from 'react'
import { NavLink } from 'react-router-dom'

const Options = () => {
  return (
    <>
      <div className='card w-100 shadow-sm bg-light bg-opacity-75'>
        <div className='card-body'>
          <div className='card-text text-center'>
            <div className='text-center mb-3 mt-3'>
              <NavLink className='btn btn-outline-dark w-100' to={`perfil`}>
                Perfil
              </NavLink>
            </div>
            <div className='text-center mb-3'>
              <NavLink className='btn btn-outline-dark w-100' to={`gestion`}>
                Gestion de cuenta
              </NavLink>
            </div>
            <div className='text-center mb-3'>
              <NavLink className='btn btn-outline-dark w-100' to='publicaciones'>
                Gestion de publicaciones
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Options
