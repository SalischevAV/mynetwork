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

/*
post['comments'] = commentsArr.filter(comment => comment.postID === post.id);
                console.log(post.comments);
                post['user'] = usersArr.find(user => user.id === post.userID);  
                console.log(post.user)
                
                
 const newsArr = postsArr.map((post) => 
            ({
                    ...post,
                    user: usersArr,
                    comments: commentsArr
                })); 
                
                
 for (let i=0; i++; i <postsArr.length){
               let user = usersArr.find(user => user.id === postsArr[i].userID);
               let comments = commentsArr.filter(comment => comment.postID === postsArr[i].id);
               postsArr[i] = {
                ...postsArr[i] ,
                user: user,
                comments: comments,
               }
           }

           //let user = usersArr.find(user => user.id === post.userID);
            //let comments = commentsArr.filter(comment => comment.postID === post.id);

            */