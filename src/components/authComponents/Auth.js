import React, {useEffect, useState} from 'react';
import app from '../../auth/base';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const[currentUser, setCurrentuser] = useState(null);

    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentuser);
    }, []);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
