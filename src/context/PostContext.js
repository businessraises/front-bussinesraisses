import React, { useState } from 'react'

const PostContext = React.createContext()

export function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([])

  return <PostContext.Provider value={{ posts, setPosts }}> {children} </PostContext.Provider>
}

export default PostContext
