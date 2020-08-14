import { FILTER_USER, FILTER_POSTS, FILTER_ALBUMS } from '../types';

const initialState={
    filteredUser:{},
    filteredPosts: [],
    filteredAlbums: [],
}

export const filterReducer = (state=initialState, action) =>{
    switch(action.type){
        case FILTER_USER:
            return {...state, filteredUser: action.payload };
        case FILTER_POSTS:
            return {...state, filteredPosts: action.payload};
        case FILTER_ALBUMS:
            return {...state, filteredAlbums: action.payload};
        default: return state;
    }
}