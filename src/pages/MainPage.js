import React from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from '../commons/Footer'
import Navigation from '../commons/Navigation'

/* Realizará la carga de los datos al iniciar y se la pasará a los componentes como props */
import SpinnerBootstrap from '../commons/SpinnerBootstrap'
import usePosts from '../hooks/usePosts'
import useUser from '../hooks/useUser'

const MainPage = () => {
  const { user, loading: loadUser } = useUser()
  usePosts()

  if (loadUser) {
    return <SpinnerBootstrap size={15} />
  }

  return (
    <>
      <Navigation name={user.name} />
      <div className='pt-5'>
        <Outlet />
      </div>
    </>
  )
}

export default MainPage
