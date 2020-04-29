import React from 'react'
import {FirebaceContext} from './firebaseContext'

export const FirebaceState = ({children}) => {
    
    
    return (
        <FirebaceContext.Provider>
            {children}
        </FirebaceContext.Provider>
    )
}