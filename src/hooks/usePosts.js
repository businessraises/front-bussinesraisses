import { useContext, useEffect, useState } from 'react'
import PostContext from '../context/PostContext'
import { getPosts } from '../static/js/postController'

export default function usePosts() {
  const { posts, setPosts } = useContext(PostContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPosts().then((data) => {
      setPosts([...data])
      setLoading(false)
    })
  }, [setPosts])

  return {
    posts,
    loading,
  }
}
