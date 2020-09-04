import { REFRESH_USER_LIST } from '../types'

const initialState={
    userList:[],
}

export const chatReducer = (state=initialState, action) => {
    switch(action.type){
        case REFRESH_USER_LIST:
            return{
                ...state,
                userList: action.payload,
            }
        default: return state;
    }    
}
