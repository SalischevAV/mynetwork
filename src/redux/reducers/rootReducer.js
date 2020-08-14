import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {postReducer} from './postReducer';
import {appReducer} from './appReducer';
import { newsReducer } from './newsReducer';
import { filterReducer } from './filterReducer';
import {albumReducer} from './albumReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    album: albumReducer,
    app: appReducer,
    news: newsReducer,
    filter: filterReducer,
});