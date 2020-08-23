import { LOAD_ALBUMS, SET_ALBUM_CURRENT_PAGE } from '../types';

const initialState = {
    albums: [],
    currentPage: 1,
    limit: 10,
    totalCount: 0,
}

export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return {
                ...state,
                albums: action.payload.albums,
                totalCount: action.payload.total_count,
            }
        case SET_ALBUM_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        default: return state;
    }
}
