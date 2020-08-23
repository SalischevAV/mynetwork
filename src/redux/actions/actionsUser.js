import {CREATE_USER, LOAD_USER, LOAD_USERS, CLEAR_USERS, DELETE_USER, SET_USER_CURRENT_PAGE} from '../types';
import {showLoader, hideLoader, showAlert, hideAlert, disableButtons, enableButtons} from './actionApp';
import {SERVER } from '../../server';

export function loadUsers(currentPage, limit){
    return async dispatch =>{
        try{
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER + `/users?limit=${limit}&page=${currentPage}`);
            const data = await response.json();
           setTimeout(()=>{
            dispatch({
                type: LOAD_USERS,
                payload: data,
            });
            dispatch(hideLoader());
            dispatch(enableButtons());
           }, 2000);           
            
        }
        catch(err){
            dispatch(hideLoader());
            dispatch(enableButtons());
            dispatch(showAlert(err.message));
            console.dir(err)
        }
    }

}

export function createUser(user){
    return async dispatch =>{
        try{
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER + '/users',{
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(user) 
        });
            const data = await response.json();
            dispatch({
                type: CREATE_USER,
                payload:data
            });
            dispatch(hideLoader());
            dispatch(enableButtons());
            return data;
        }
        catch(err){
            dispatch(hideLoader());
            dispatch(enableButtons());
            dispatch(showAlert(err.message));
        }
    }
}


export function deleteUser(id){
    return async dispatch =>{
        try{
            dispatch(showLoader());
            dispatch(disableButtons());
            const response =await fetch((SERVER + '/users/'+id.toString()),{
                headers: { "Content-Type": "application/json" },
                method: "DELETE",
            });
            dispatch({
                type: DELETE_USER,
                payload: id
            })
            dispatch(hideLoader());
            dispatch(enableButtons());
        }
        catch(err)
        {
            dispatch(hideLoader());
            dispatch(enableButtons());
            dispatch(showAlert(err.message));
            console.log(err)
        }
    }
}

export function clearUsers(){
    return {
        type: CLEAR_USERS,
    }
}

export function setUserCurrentPage(page){
    return{
        type: SET_USER_CURRENT_PAGE,
        payload: page,
    }
}