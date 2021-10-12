import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/config'

const autenticar = ( state, setState ) => {

  const auth = getAuth(app);
  const sesionUser = signInWithEmailAndPassword(auth, state.email, state.password)
    .then((userCredential) => {

      const user = userCredential.user;

      setState({
        ...state,
        "sesion": user
      })

      return {
        data: user,
        type: 'auth',
        state: true
      }
    })
    .catch((error) => {
      
      return {
        data: error,
        type: 'auth',
        state: false
      }
    });

  return sesionUser
}

const registrar = ( state, setState ) => {

  const auth = getAuth(app);
  const sesionUser = createUserWithEmailAndPassword(auth, state.email, state.password)
    .then((userCredential) => {

      const user = userCredential.user;

      setState({
        ...state,
        "sesion": user
      })

      return ({
        data: user,
        type: 'create',
        state: true
      })

    })
    .catch((error) => {

      return ({
        data: error,
        type: 'create',
        state: false
      })

    });

  return sesionUser;
}

const salir = ( setState ) => {
  setState({
    email: "",
    password: "",
  });
}

export { autenticar, registrar, salir }