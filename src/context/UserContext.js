import React, { useState } from 'react'

const UserContext = React.createContext()

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
