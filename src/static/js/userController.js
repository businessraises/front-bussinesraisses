import axios from 'axios'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()
const getToken = async () => cookies.get('accessToken')

const getUser = async () => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.get('/auth-controller/get-user', {
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

const getUserId = async (id) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.get(`/user/${id}`, {
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

const getUserUid = async (uid) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.get(`/user/uid/${uid}`, {
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

const putUser = async (object) => {
  try {
    const accessToken = await getToken()
    const { data } = await axios.put('/user', object, {
      baseURL: 'https://spring-business-raises.herokuapp.com',
      method: 'PUT',
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

export { getUser, getUserId, getUserUid, putUser }
