import React from 'react'
import { signIn, signUp, signOut } from '../firebase/authController'
import messageError from '../static/js/message'

const UserContext = React.createContext()
const { Provider, Consumer } = UserContext


const UserProvider = ({ children }) => {
  
  return (
    <Provider
      value={{

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
