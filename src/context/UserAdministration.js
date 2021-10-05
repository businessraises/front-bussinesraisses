import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/config'

const autenticar = ( event, state, setState ) => {
    event.preventDefault();

    const auth = getAuth( app );
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        setState({
            ...state,
            "uid" : user.uid
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( `Code: ${errorCode} \n Message: ${errorMessage}` )
      });
}

const registrar = ( event, state ) => {
  event.preventDefault();

  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, state.email, state.password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log( `Code: ${errorCode} \n Message: ${errorMessage}` )
  });
}

export { autenticar, registrar }