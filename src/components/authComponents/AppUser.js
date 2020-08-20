import React, {useEffect, useState, useContext} from 'react';
import {SERVER} from '../../server';
import { AuthContext } from './Auth'


export const AppUserContext = React.createContext();

export const  AppUserProvider = ({children}) => {
    const [appUser, setAppUser] = useState({});
    const {currentUser} = useContext(AuthContext); 

    useEffect(()=>{
        getAppUser(currentUser.uid);
    },[currentUser])

    const getAppUser = async (id) => {
        try{
            let response = await fetch(SERVER + '/users/firebase/' + id);
            let data = await response.json();
            setAppUser({...data});
        }
        catch(err){
            console.log(err.message);        
        }    
    };
   
    return(
        <AppUserContext.Provider value={appUser}>
            {children}
        </AppUserContext.Provider>
    )
}