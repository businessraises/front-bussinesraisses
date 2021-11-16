import { useContext, useState } from "react"
import PostContext from "../context/PostContext"
import UserContext from "../context/UserContext"
import messageError from "../static/js/message"
import { deletePost } from "../static/js/postController"
import { putUser } from "../static/js/userController"

export default function useManagement() {
  const {setUser} = useContext(UserContext)
  const { posts, setPosts } = useContext(PostContext)
  const [selected, setSelected] = useState({
    businessHours: 'string',
    description: 'string',
    direction: 'string',
    id: 0,
    images: [],
    primaryTelephone: 'string',
    secondaryEmail: 'string',
    secondaryTelephone: 'string',
    title: 'string',
    type: 'string',
    user: {
      email: 'string',
      id: 0,
      name: 'string',
      uid: 'string',
    },
  })

  const handleUpdateUser = async (userData) => {
    setUser({
      ...userData,
    })
    const response = await putUser(userData)

    response
      ? messageError('Se han actualizado los datos correctamente.', false)
      : messageError('Error, por favor, intentelo más tarde.', true)
  }

  const handleRemove = async (id) => {
    await deletePost(parseInt(id))

    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleEdit = (id) => {
    setSelected(...posts.filter((post) => post.id === id))
  }

  return {
    handleUpdateUser,
    handleRemove,
    handleEdit,
    posts,
    selected
  }
}
