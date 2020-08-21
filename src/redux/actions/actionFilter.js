import { FILTER_USER, FILTER_POSTS, FILTER_ALBUMS } from '../types';
import { showLoader, hideLoader,disableButtons, enableButtons, showAlert } from './actionApp';
import {SERVER } from '../../server';

export function filterUser(id){
   return async dispatch =>{
       try{
        dispatch(showLoader());
        dispatch(disableButtons());

        const response = await fetch(SERVER + '/users/' + id);
        const filteredUser = await response.json();

        dispatch({
            type: FILTER_USER,
            payload: filteredUser
        })

        dispatch(hideLoader());
        dispatch(enableButtons());
       }
       catch(err){
        dispatch(hideLoader());
        dispatch(enableButtons());
        dispatch(showAlert(err.message));
       }
   }
}

export function filterPosts(id){
    return async dispatch=>{
       try{
        dispatch(showLoader());
        dispatch(disableButtons());

        const response = await fetch(SERVER + '/posts');
        const posts = (await response.json()).posts;
        const filteredPosts = posts.filter(post => post.userId === id);

        dispatch({
            type: FILTER_POSTS,
            payload: filteredPosts,
        });

        dispatch(hideLoader());
        dispatch(enableButtons());

       }
       catch(err){
        dispatch(hideLoader());
        dispatch(enableButtons());
        dispatch(showAlert(err.message));
       }
    }
}

export function filterAlbums(id){
    return async dispatch=>{
        try{
        dispatch(showLoader());
        dispatch(disableButtons());

        const response = await fetch(SERVER + '/albums');
        const albums = await response.json();
        const filteredAlbums = albums.filter(album => album.userId === id);

        dispatch({
            type: FILTER_ALBUMS,
            payload: filteredAlbums,
        });

        dispatch(hideLoader());
        dispatch(enableButtons());
        }
        catch(err){
            dispatch(hideLoader());
        dispatch(enableButtons());
        dispatch(showAlert(err.message));
        }
    }
}