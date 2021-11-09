import React, { useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from '../commons/Footer'
import Navigation from '../commons/Navigation'

/* Realizará la carga de los datos al iniciar y se la pasará a los componentes como props */
import { getUser, getUserUid } from '../static/js/userController'
import { UserContext } from '../context/UserContext'
import SpinnerBootstrap from '../commons/SpinnerBootstrap'
import { getPosts } from '../static/js/postController'

const MainPage = () => {
  const { user, setUser, setPosts } = useContext(UserContext)

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

  useEffect(() => {
    getPosts().then((data) => {
      setPosts([...data])
    })
  }, [setPosts])

  if (!user.id) {
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
