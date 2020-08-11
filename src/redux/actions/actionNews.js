import { LOAD_NEWS } from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';

export function loadNews() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postsArr = await response.json();

            response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const commentsArr = await response.json();

            response = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersArr = await response.json();

            
          const newsArr = postsArr.map((post) =>(
             {
                ...post,
                user: (usersArr.find(user=>user.id===post.userId)),
                comments: (commentsArr.filter(comment => comment.postId===post.id)),
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
