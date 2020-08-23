import { LOAD_NEWS, CREATE_NEWS, SET_NEWS_CURRENT_PAGE } from '../types';

const initialState = {
    news: [],
    limit: 10,
    totalCount: 0,
    currentPage: 1,
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return {
                ...state,
                news: action.payload.data,
                totalCount: action.payload.total_count,

            };
        case CREATE_NEWS:
            console.log(action.payload);
            return {
                ...state,
                news: state.news.concat([action.payload])
            };
        case SET_NEWS_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        default: return state;
    }
};
