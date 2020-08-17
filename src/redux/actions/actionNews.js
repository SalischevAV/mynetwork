import { LOAD_NEWS, CREATE_NEWS } from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';
import {SERVER } from '../server';

export function loadNews() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            let response = await fetch(SERVER + '/posts');
            const postsArr = await response.json();

            response = await fetch(SERVER + '/comments');
            const commentsArr = await response.json();

            response = await fetch(SERVER+ '/users');
            const usersArr = await response.json();

            
          const newsArr = postsArr.map((post) =>(
             {
                ...post,
                user: (usersArr.find(user=>user._id===post.userId)),
                comments: (commentsArr.filter(comment => comment.postId===post._id)),
            }

          ));
  

            dispatch({
                type: LOAD_NEWS,
                payload:  newsArr,
            })
            dispatch(hideLoader());
            dispatch(enableButtons());
}
        catch (err) {
    dispatch(hideLoader());
    dispatch(enableButtons());
    dispatch(showAlert(err.message));
}
    }
}

export function createNews(post){
    return({
        type: CREATE_NEWS,
        payload: post,
    })
}