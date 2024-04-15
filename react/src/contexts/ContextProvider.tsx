import { createContext, useState, useContext  } from "react";

const StateContext = createContext( {
    user:null,
    token:null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}:any) => {

    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [role, _setRole] = useState(localStorage.getItem('ROLE'))

    const setToken = (token:any) => {
        _setToken(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const setRole = (role:string) => {
       _setRole(role)
        if(role) {
            localStorage.setItem('ROLE', role)
        } else {
            localStorage.removeItem('ROLE')
        }
    }
    return (
        <StateContext.Provider value={{
user,
token,
role,
setUser,
setToken,
setRole
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
