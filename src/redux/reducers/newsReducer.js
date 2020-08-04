import {LOAD_NEWS} from '../types';

const initialState = {
    news :[],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_NEWS:
            return {...state, news: action.payload};        
        default: return state;
    }
};
