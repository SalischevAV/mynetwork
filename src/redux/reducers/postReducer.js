import { CREATE_POST, LOAD_POSTS, LOAD_POST, UPDATE_POST, CLEAR_POSTS, FILTER_POSTS} from '../types';

const initialState = {
    posts: [],
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return { ...state, posts: state.posts.concat(action.payload)};
        case CREATE_POST:
            return{...state, posts: state.posts.concat([action.payload])};
        case CLEAR_POSTS:
            return {...state, posts: []};
        case FILTER_POSTS:
            return {...state, posts: state.posts.filter(post => post.userId === action.payload )}
        case UPDATE_POST:
        default: return state;
    }
}