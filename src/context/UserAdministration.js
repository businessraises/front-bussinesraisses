import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/config'

const autenticar = (event, state, setState) => {
  event.preventDefault();

  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, state.email, state.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      setState({
        ...state,
        "uid": user.uid
      })
    })
    .catch((error) => {
      messageError( 'Usuario o Contraseña, incorrecta' );
    });
}

const registrar = (event, state) => {
  event.preventDefault();

  const psw = document.getElementsByName('passwordTemp')[0].value;

  if (state.password === psw) {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;

        messageError( errorMessage.split(': ')[1] )

      });
  } else {
    messageError( 'Verificar contraseña, deben ser iguales' );
  }


}

const messageError = (message) => {
  document.querySelector('.message-error').innerHTML = message;

  setTimeout(() => {
    document.querySelector('.message-error').innerHTML = '';
  }, 3000);
}
export { autenticar, registrar }