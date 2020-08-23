import { CREATE_USER, LOAD_USER, LOAD_USERS, CLEAR_USERS, DELETE_USER, FILTER_USERS, SET_USER_CURRENT_PAGE } from '../types';

const initialState = {
    users: [],
    currentPage: 1,
    limit: 10,
    totalCount: 0,
}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.payload.users,
                totalCount: action.payload.total_count,
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        case CREATE_USER:
            return {
                ...state,
                users: state.users.concat([action.payload])
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case SET_USER_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        default: return state;
    }
}
