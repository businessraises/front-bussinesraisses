import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

const Navigation = ({ name }) => {
  const { setUser, signOut } = useContext(UserContext)

  const handleLogout = () => {
    signOut(setUser)
  }

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'
      style={{ position: 'fixed', width: '100vw', zIndex: '10' }}
    >
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='#'>
                Productos
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className='navbar-brand ms-3 fs-6' to='/'>
          BUSINESS RAISES
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/acerca'>
                Acerca de
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='#'
                id='navItemUser'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {name || '(Completar datos)'}
              </Link>
              <ul className='dropdown-menu shadow' aria-labelledby='navItemUser'>
                {/* <li><Link className="dropdown-item" to="#">Perfil</Link></li> */}
                <li>
                  <Link className='dropdown-item' to='/configuracion/perfil'>
                    Configuración
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' to='/login' onClick={handleLogout}>
                    Cerrar Sesion
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
