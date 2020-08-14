import {LOAD_NEWS, CREATE_NEWS} from '../types';

const initialState = {
    news :[],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_NEWS:
            return {...state, news: action.payload};  
        case CREATE_NEWS:
            console.log(action.payload);
            return {...state, news: state.news.concat([action.payload])};  
        default: return state;
    }
};
