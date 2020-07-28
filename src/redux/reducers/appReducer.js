import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, ENABLE_BUTTONS, DISABLE_BUTTONS } from '../types';

const initialState = {
    loading: false,
    alert: null,
    disabled: false
}

export const appReducer = (state = initialState, action) =>{
    switch(action.type){
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER :
            return {...state, loading: false};
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        case HIDE_ALERT:
            return {...state, alert: null};
        case ENABLE_BUTTONS:
            return {...state, disabled: false};
            case DISABLE_BUTTONS:
        return {...state, disabled: true};
        default:
            return state;
    }
}