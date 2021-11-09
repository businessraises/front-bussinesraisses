import axios from 'axios'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()
const getToken = async () => cookies.get('accessToken')

const getPosts = async () => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.get('/post', {
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

const savePost = async (object) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.post('/post', object, {
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

const deletePost = async (id) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.delete(`/post/${id}`, {
      baseURL: 'https://spring-business-raises.herokuapp.com',
      method: 'DELETE',
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

const getPostUserId = async (id) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.get(`/post/${id}`, {
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

export { getPosts, savePost, deletePost, getPostUserId }
