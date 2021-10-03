import React from "react";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const FormularioR = () => {

    const registrar = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        });
    }


    return (
        <div class="card container">
            <div class="card-body">
                <h4 class="card-title">BUSINESS RAISES</h4>
                <form onSubmit="#">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Correo electronico
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="example@example.com"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="***********"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioR;
