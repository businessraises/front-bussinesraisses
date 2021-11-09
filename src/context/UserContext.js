import React, { useState } from 'react'
import { signIn, signUp, signOut } from './authController'
import messageError from '../static/js/message'

const UserContext = React.createContext()
const { Provider, Consumer } = UserContext


const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  
  return (
    <Provider
      value={{
        user,
        setUser,
        signIn,
        signUp,
        signOut,
        messageError,
        posts,
        setPosts,
      }}
    >
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }
