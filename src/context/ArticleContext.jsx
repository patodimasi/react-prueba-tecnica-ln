import React, { Children, useState } from 'react'

const Context = React.createContext({});

export function ArticleContextProvider ({children}) {
    const [artContext, setArtContext] = useState()

    return <Context.Provider value={{artContext, setArtContext}}>
        {children}
    </Context.Provider>

}
export default Context