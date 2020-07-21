import {CREATE_USER, LOAD_USER, LOAD_USERS, CLEAR_USERS, DELETE_USER} from '../types';

export function loadUsers(){
    return async dispatch =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({
                type: LOAD_USERS,
                payload: data,
            });
        }
        catch(err){
            console.log(err);
        }
    }

}

export function createUser(user){
    return async dispatch =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            headers: {'Contetnt-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({user}) 
        });
            const data = await response.json();
            console.log(data);
            dispatch({
                type: CREATE_USER,
                payload:{...user, id: data.id}
            });
        }
        catch(err){
            console.log(err)
        }
    }
}

export function deleteUser(id){
    return async dispatch =>{
        try{
            const response =await fetch(('https://jsonplaceholder.typicode.com/users/'+id.toString()),{
                eaders: { "Content-Type": "application/json" },
                method: "DELETE",
            });
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        }
        catch(err)
        {
            console.log(err)
        }
    }
}

export function clearUsers(){
    return {
        type: CLEAR_USERS,
    }
}