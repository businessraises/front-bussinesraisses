import React, { useState } from 'react';
import { autenticar, registrar, salir } from './UserAdministration';

const UserContext = React.createContext();
const { Provider, Consumer } = UserContext;

const messageError = (message) => {
    document.querySelector('.message-error').innerHTML = message;

    setTimeout(() => {
        document.querySelector('.message-error').innerHTML = '';
    }, 3000);
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    return (
        <Provider value={{
            user,
            setUser,
            autenticar,
            registrar,
            salir,
            messageError
        }}>
            {children}
        </Provider>
    )
};

export { UserProvider, Consumer as UserConsumer, UserContext }