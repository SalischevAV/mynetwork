import { FILTER_USER } from '../types';

const initialState={
    filteredUser:{},
}

export const filterReducer = (state=initialState, action) =>{
    switch(action.type){
        case FILTER_USER:
            return {...state, filteredUser: action.payload };
        default: return state;
    }
}