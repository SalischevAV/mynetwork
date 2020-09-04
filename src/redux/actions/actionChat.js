import { REFRESH_USER_LIST } from '../types';
import { SERVER } from '../../server'

export const refreshUserList = (list)=>{
    return async dispatch => {
        let userList = [];
        try{
            list.forEach(async item => {
                const response = await fetch(SERVER + '/users/'+ item);
                console.log(SERVER + '/users/'+ item)
                const user = await response.json();
                userList.push(user);
            });
        }
        catch(err){
            console.log(err);
        }
        dispatch({
        type: REFRESH_USER_LIST,
        payload: userList,
        })
    }
}