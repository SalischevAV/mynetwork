import { CREATE_POST, LOAD_POSTS, CLEAR_POSTS, FILTER_POSTS, SET_CURRENT_PAGE } from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';
import { createNews } from './actionNews';
import {SERVER } from '../../server';

export function loadPosts(currentPage, limit) {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER + `/posts?limit=${limit}&page=${currentPage}`);
            const data = (await response.json());
            setTimeout(() => {
                dispatch({
                    type: LOAD_POSTS,
                    payload: data,
                })
            dispatch(hideLoader());
            dispatch(enableButtons());
            }, 2000);
        }
        catch (err) {
            dispatch(hideLoader());
            dispatch(enableButtons());
            dispatch(showAlert(err.message));
        }
    }
}

export function createPost(post) {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER + '/posts', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(post)
            });
            const data = await response.json();
            dispatch({
                type: CREATE_POST,
                payload: data
            });
            dispatch(hideLoader());
            dispatch(enableButtons());
            //dispatch(createNews({ ...post, id:101}));
        }
        catch (err) {
            dispatch(hideLoader());
            dispatch(enableButtons());
            dispatch(showAlert(err.message));

        }
    }
}

export function clearPosts() {
    return {
        type: CLEAR_POSTS
    }
}
export function setCurentPage(page){
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    }
}