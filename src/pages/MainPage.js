import React, { useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from '../commons/Footer'
import Navigation from '../commons/Navigation'

/* Realizará la carga de los datos al iniciar y se la pasará a los componentes como props */
import { getUser, getUserUid } from '../static/js/userController'
import { UserContext } from '../context/UserContext'

const MainPage = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    const handleUserData = async () => {
      const { uid } = await getUser()
      const data = await getUserUid(uid)

      setUser({
        ...data,
      })
    }

    handleUserData()
  }, [setUser])

  return (
    <>
      <Navigation name={user.name} />
      <Outlet />
    </>
  )
}

export default MainPage
