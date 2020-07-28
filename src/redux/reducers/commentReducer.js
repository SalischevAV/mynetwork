import { CREATE_COMMENT, LOAD_COMMENTS, FILTER_COMMENTS } from '../types';

const initialState = {
    comments: []
}

export const commentReducer = (state=initialState, action) =>{
    switch(action.type){
        case LOAD_COMMENTS:
            return {...state, comments: state.comments.concat(action.payload)};
        default: return state;
    }
}