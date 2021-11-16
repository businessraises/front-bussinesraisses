import { useContext, useEffect, useState } from 'react'
import { getUser, getUserUid } from '../static/js/userController'
import UserContext from '../context/UserContext'

export default function useUser () {
  const {user, setUser} = useContext(UserContext)
  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    /* Cargar usuarios */
    getUser().then(({ uid }) => {
      getUserUid(uid).then((data) => {
        setUser({
          ...data,
        })
        setLoading(false)
      })
    })
  }, [setUser])


  return {
    user,
    loading,
  }
}
