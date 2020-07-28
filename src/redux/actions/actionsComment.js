import { LOAD_COMMENTS } from "../types";

export function loadComments(id){
    return async dispatch =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id +'/comments');
            const data = await response.json();
            dispatch({
                type: LOAD_COMMENTS,
                payload: data
            })
        }
        catch(err){
            console.log(err);
        }
    }
}