import { LOAD_NEWS, CREATE_NEWS, SET_NEWS_CURRENT_PAGE } from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';
import {SERVER } from '../../server';

export function loadNews(currentPage, limit) {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER + `/news?limit=${limit}&page=${currentPage}`);
            const data = await response.json(); 
            dispatch({
                type: LOAD_NEWS,
                payload:  data,
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

export function setNewsCurrentPage(page){
    return{
        type: SET_NEWS_CURRENT_PAGE,
        payload: page
    }
}