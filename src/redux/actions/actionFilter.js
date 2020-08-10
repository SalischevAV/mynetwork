import { FILTER_USER } from '../types';
import { showLoader, hideLoader,disableButtons, enableButtons, showAlert } from './actionApp';

export function filterUser(id){
   return async dispatch =>{
       try{
        dispatch(showLoader());
        dispatch(disableButtons());

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const filteredUser = users.find(user => user.id == id);
        console.log(filteredUser);

        dispatch({
            type: FILTER_USER,
            payload: filteredUser
        })

        dispatch(hideLoader());
        dispatch(enableButtons());
       }
       catch(err){
        dispatch(hideLoader());
        dispatch(enableButtons());
        dispatch(showAlert(err.message));
       }
   }

}