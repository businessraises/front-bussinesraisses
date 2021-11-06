import React, { useState } from 'react'
import { signIn, signUp, signOut } from './authController'
import messageError from '../static/js/message'

const UserContext = React.createContext()
const { Provider, Consumer } = UserContext


const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <Provider
      value={{
        user,
        setUser,
        signIn,
        signUp,
        signOut,
        messageError,
      }}
    >
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }
