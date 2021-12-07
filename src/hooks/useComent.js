import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()
const getToken = async () => cookies.get('accessToken')

export const saveComment = async (object) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.post('/comment', object, {
      baseURL: 'https://spring-business-raises.herokuapp.com',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })

    return data
  } catch (error) {
    console.error(error.message)
    return undefined
  }
}

export const getComments = async ( idPost ) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.get(`/comment/post/${idPost}`, {
      baseURL: 'https://spring-business-raises.herokuapp.com',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })

    return data
  } catch (error) {
    console.error(error.message)
    return undefined
  }
}

export const deleteComment = async ( idComment ) => {
  try {
    const accessToken = await getToken()
    await axios.delete(`/comment/${idComment}`, {
      baseURL: 'https://spring-business-raises.herokuapp.com',
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })

    return true
  } catch (error) {
    console.error(error.message)
    return undefined
  }
}

const useComent = ( idPost ) => {
  const [comentarios, setComentarios] = useState([])

  useEffect( () => {
    getComments(idPost).then( data => setComentarios(data) )
  }, [idPost])

  return comentarios
}

export default useComent