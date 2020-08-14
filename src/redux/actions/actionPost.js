import { CREATE_POST, LOAD_POSTS, CLEAR_POSTS, FILTER_POSTS } from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';
import { createNews } from './actionNews';

export function loadPosts() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setTimeout(() => {
                dispatch({
                    type: LOAD_POSTS,
                    payload: data
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
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                headers: { 'Content-type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ post })
            });
            const data = await response.json();
            dispatch({
                type: CREATE_POST,
                payload: { ...post, id:post.userId} //need server
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