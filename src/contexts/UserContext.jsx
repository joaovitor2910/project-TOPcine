import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserStorage({ children }) {
    const [search, setSearch] = useState()
    const [type, setType] = useState()
    const [loading, setLoading] = useState(false);


    return (
        <UserContext.Provider value={{search, setSearch, type, setType, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}