import {LOAD_ALBUMS} from '../types'
import { act } from 'react-dom/test-utils'

const initialState = {
    albums: [],
}

export const albumReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_ALBUMS:
            return {...state, albums: action.payload}
        default: return state;
    }
}
