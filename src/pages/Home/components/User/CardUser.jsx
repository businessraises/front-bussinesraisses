import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'

const CardUser = ({ style }) => {
  const { user } = useContext(UserContext)

  return (
    <div className='card w-100 shadow-sm'>
      <div className='card-body'>
        <div className='card-title text-center'>
          <span style={{ fontSize: '15vh' }}>
            <i className='bi bi-person-circle'></i>
          </span>
          <h5>
            {user.name} {user.surname}
          </h5>
          <hr className='w-75 mx-auto' />
        </div>
        <div className='card-text'>
          <ul className='text-left'>
            <li className='m-3'>
              <strong>Correo: </strong>
              <br />
              {user.email}
            </li>
            <li className='m-3'>
              <strong>Ocupación: </strong>
              <br /> {user.occupation}
            </li>
            <li className='m-3'>
              <strong>Telefono: </strong>
              <br /> {user.telephone}
            </li>
            <li className='m-3'>
              <strong>Departamento: </strong>
              <br /> {user.department}
            </li>
            <li className='m-3'>
              <strong>Municipio: </strong>
              <br /> {user.municipality}
            </li>
          </ul>
          <div className='text-center'>
            <hr className='w-100 mx-auto' />
            <button
              type='button'
              className='btn btn-dark w-100'
              data-bs-toggle='modal'
              data-bs-target='#formPost'
            >
              Crear una nueva oferta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardUser
