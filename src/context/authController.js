import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '../firebase/config'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()

const signIn = async (state) => {
  try {
    const auth = getAuth(app)
    const { user } = await signInWithEmailAndPassword(
      auth,
      state.email,
      state.password
    )
    const token = await user.getIdToken()

    cookies.set('accessToken', token, { path: '/' })

    return {
      data: user,
      type: 'auth',
      state: true,
    }
  } catch (error) {
    return {
      data: error,
      type: 'auth',
      state: false,
    }
  }
}

const signUp = async (state, setState) => {
  try {
    const auth = getAuth(app)
    const { user } = await createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password
    )
    const token = await user.getIdToken()

    cookies.set('accessToken', token, { path: '/' })

    setState({
      accessToken: token,
    })

    return {
      data: user,
      type: 'create',
      state: true,
    }
  } catch (error) {
    return {
      data: error,
      type: 'create',
      state: false,
    }
  }
}

const signOut = async (setState) => {
  cookies.remove('accessToken', { path: '/' })
  cookies.remove('uid', { path: '/' })
  setState({})
}

export { signIn, signUp, signOut }
