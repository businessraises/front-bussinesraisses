import React, { useReducer } from 'react'


const UserProvider = ( { children } ) => {

    const UserContext = React.createContext();
    const { Provider, Consumer } = userContext;

    const [user, dispatch] = useReducer(reducer, null)



    return (
        <Provider value = {  }>
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext }