import {SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, ENABLE_BUTTONS, DISABLE_BUTTONS} from '../types.js';

export function showLoader(){
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader(){
    return{
        type: HIDE_LOADER,
    }
}

export function showAlert(alert){
    return dispatch => {
        dispatch({
        type: SHOW_ALERT,
        payload: alert, 
    });

    setTimeout(()=>{
        dispatch(hideAlert())
    },3000);

}}

export function hideAlert(){
    return {
        type: HIDE_ALERT,
    }
}

export function enableButtons(){
    return {
        type: ENABLE_BUTTONS
    }
}

export function disableButtons(){
    return {
        type: DISABLE_BUTTONS
    }
}