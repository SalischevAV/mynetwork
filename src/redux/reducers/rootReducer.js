import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {postReducer} from './postReducer';
import {commentReducer} from './commentReducer';
import {appReducer} from './appReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    app: appReducer,
    news: newsReducer,
});