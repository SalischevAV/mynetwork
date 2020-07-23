import {CREATE_USER, LOAD_USER, LOAD_USERS, CLEAR_USERS, DELETE_USER} from '../types';

const initialState = {
    users: [],
}

export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOAD_USERS:
            return {...state, users: state.users.concat(action.payload)};
           //return {...state, users: action.payload};
        case CLEAR_USERS:
            return{...state, users:[]};
        case CREATE_USER:
            return{...state, users: state.users.concat([action.payload])};
        case DELETE_USER:
            return{...state, users: state.users.filter(item => item.id !== action.payload)};
        case LOAD_USER:
        default: return state;
    }
}