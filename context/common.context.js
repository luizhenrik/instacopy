import React, { createContext, useState } from 'react'

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [myUser, setMyUser] = useState({
        id: 152,
        username: "devUser123",
        avatar: "https://randomuser.me/api/portraits/men/84.jpg",
        id_user: "gH26Ijo"
    });
    const [modalCommentsOpened, setModalCommentsOpened] = useState(false);

    return (
        <Context.Provider value={{
            isLoaded,
            setIsLoaded,
            modalCommentsOpened,
            setModalCommentsOpened,
            myUser,
            setMyUser
        }}>
            {children}
        </Context.Provider>
    )
}