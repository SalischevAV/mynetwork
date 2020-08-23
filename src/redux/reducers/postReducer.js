import { CREATE_POST, LOAD_POSTS, LOAD_POST, UPDATE_POST, CLEAR_POSTS, FILTER_POSTS, SET_POST_CURRENT_PAGE } from '../types';

const initialState = {
    posts: [],
    currentPage: 1,
    limit: 10,
    totalCount: 0,
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
                totalCount: action.payload.total_count,
            };
        case SET_POST_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload,
            }
        case CREATE_POST:
            return { ...state,
                     posts: state.posts.concat([action.payload]),
                     };
        case CLEAR_POSTS:
            return { ...state,
                 posts: [],
                 };
        case UPDATE_POST:
        default: return state;
    }
}
