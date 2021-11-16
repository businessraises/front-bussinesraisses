import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../../context/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext)

  return (
    <>
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
          <div className='row px-5'>
            <div className='col-4'>
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
              </div>
            </div>
            <div className="col-7">
              <label htmlFor="TextDecription"> <strong>Descripcion: </strong> </label>
              <div className='card-text'> {user.biography} </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <hr className='w-75 mx-auto' />
          <Link
            to='/'
            className='btn btn-dark w-50 mb-3'
          >
            Regresar a inicio
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
