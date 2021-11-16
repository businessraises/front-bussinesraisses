import { useContext } from 'react'
import { signOut } from '../firebase/authController'
import UserContext from '../context/UserContext'

export default function useClosed() {
  const { setUser } = useContext(UserContext)

  const handleLogout = () => {
    signOut(setUser)
  }

  return handleLogout
}
