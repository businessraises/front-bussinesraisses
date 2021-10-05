import React, { useState } from 'react';
import { autenticar, registrar } from './UserAdministration';

const UserContext = React.createContext();
const { Provider, Consumer } = UserContext;

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        uid: ""
    })

    return (
        <Provider value={{
            user,
            setUser,
            autenticar,
            registrar
        }}>
            {children}
        </Provider>
    )
};

export { UserProvider, Consumer as UserConsumer, UserContext }